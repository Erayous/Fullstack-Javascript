import * as mongo from "mongodb";
import FriendFacade from "../src/facades/friendFacade";

import chai from "chai";
const expect = chai.expect;

import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

import bcryptjs from "bcryptjs";
import { InMemoryDbConnector } from "../src/config/dbConnector";
import { ApiError } from "../src/error/errors";

let friendCollection: mongo.Collection;
let facade: FriendFacade;

describe("<----------- Friends Facade ----------->", () => {
  before(async function () {
    const client = await InMemoryDbConnector.connect();
    const db = client.db();
    facade = new FriendFacade(db);
    friendCollection = db.collection("friends");
  });

  beforeEach(async () => {
    const hashedPW = await bcryptjs.hash("secret", 4);
    await friendCollection.deleteMany({});
    await friendCollection.insertMany([
      {
        firstName: "Peter",
        lastName: "Pan",
        email: "pp@b.dk",
        password: hashedPW,
        role: "user",
      },
      {
        firstName: "Donald",
        lastName: "Duck",
        email: "dd@b.dk",
        password: hashedPW,
        role: "user",
      },
      {
        firstName: "Peter",
        lastName: "Admin",
        email: "peter@admin.dk",
        password: hashedPW,
        role: "admin",
      },
    ]);
  });


  //TILFØJ VEN.
  describe("Tilføj ven.", () => {
    it("Oprette en ny ven med navn Morten.", async () => {
      const newFriend = {
        firstName: "Morten",
        lastName: "Rasmussen",
        email: "morten@b.dk",
        password: "secret",
      };
      const status = await facade.addFriend(newFriend);
      expect(status.id).to.not.be.null
      const jan = await friendCollection.findOne({ email: "morten@b.dk" });
      expect(jan.firstName).to.be.equal("Morten");
    });

    //DEN MÅ IKKE LAVE EN ROLLE PÅ VENNEN.
    it("Ingen rolle ved oprettelse.", async () => {
      const newFriend = {
        firstName: "Marcus",
        lastName: "Rasmussen",
        email: "marcus@b.dk",
        password: "secret",
        role: "admin",
      };
      await expect(facade.addFriend(newFriend)).to.be.rejectedWith(ApiError);
    });
  });

  describe("Rediger ven", () => {
    it("Ændre efternavn", async () => {
      const newPeter = {
        firstName: "Peter",
        lastName: "XXXX",
        email: "peter@admin.dk",
        password: "secret",
      };
      const status = await facade.editFriend("peter@admin.dk", newPeter);
      expect(status).to.not.be.null;
      const peter = await friendCollection.findOne({ email: "peter@admin.dk" });
      expect(peter.lastName).to.be.equal("XXXX");
    });
    it("Ikke ændre rollen.", async () => {
      const newPeter = {
        firstName: "Peter",
        lastName: "XXXX",
        email: "peter@b.dk",
        password: "secret",
        role: "admin",
      };
      await expect(
        facade.editFriend("peter@b.dk", newPeter)
      ).to.be.rejectedWith(ApiError);
    });
  });

  describe("Fjern ven", () => {
    it("Fjern vores ven peter.", async () => {
      const status = await facade.deleteFriend("pp@b.dk");
      expect(status).to.be.equal(true);
    });
    it("Returner false hvis ingen ven findes.", async () => {
      const status = await facade.deleteFriend("XXX@b.dk");
      expect(status).to.be.equal(false);
    });
  });

  describe("Find venner.", () => {
    it("Find vores 3 venner.", async () => {
      const friends = await facade.getAllFriends();
      expect(friends.length).to.be.equal(3);
    });

    it("Find Donald Duck.", async () => {
        const dd = await facade.getFriend("dd@b.dk");
        expect(dd.firstName).to.be.equal("Donald");
    });
  });

  describe("Brug vores getVerifiedUser funktion.", () => {
    it("Valider loginoplysninger på Peter.", async () => {
      const veriefiedPeter = await facade.getVerifiedUser("pp@b.dk", "secret");
      expect(veriefiedPeter).to.be.not.null;
    });

    it("Valider ikke loginoplysninger på Peter.", async () => {
      const dontVerifyPeter = await facade.getVerifiedUser(
        "pp@b.dk",
        "wrongPassword"
      );
      expect(dontVerifyPeter).to.be.null;
    });

    it("Valider ikke loginoplysninger på ikke eksisterende bruger. ", async () => {
      const dontVerifyUser = await facade.getVerifiedUser("pap@b.dk", "secret");
      expect(dontVerifyUser).to.be.null;
    });
  });
});