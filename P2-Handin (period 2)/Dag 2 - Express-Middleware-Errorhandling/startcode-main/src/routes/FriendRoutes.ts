import { Router } from "express"
const router = Router();

import facade from "../facades/DummyDB-Facade"


router.get("/all", async (req: any, res) => {
    const friends = await facade.getAllFriends();
    res.json(friends);
})

router.get("/youare", async (req: any, res) => {
    const user = req.user;
    res.json(user);
})

router.get("/me", async (req: any, res , next) => {
    const userId = req.credentials.userName;
    const friend = await facade.getFriend(userId);

    if(friend == null) {
        return next(new Error("User not found"))
    }

    const { firstName, lastName, email } = friend;
    const friendDTO = { firstName, lastName, email }
    res.json(friendDTO);
})

export default router