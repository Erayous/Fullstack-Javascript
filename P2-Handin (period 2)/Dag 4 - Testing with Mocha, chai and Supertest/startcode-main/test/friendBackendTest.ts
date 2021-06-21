import path from "path";
import { expect } from "chai";
import app from "../src/app";

import supertest from "supertest";
const request = supertest(app);

import bcryptjs from "bcryptjs";
import * as mongo from "mongodb";
import { InMemoryDbConnector } from "../src/config/dbConnector";
import { response } from "express";
let friendCollection: mongo.Collection;

describe("<----------- Friends Backend ----------->", function () {
  let URL: string;

  before(async function () {
    const connection = await InMemoryDbConnector.connect();
    const db = connection.db();
    app.set("db", db);
    app.set("db-type", "Test-DB");
    friendCollection = db.collection("friends");
  });

  beforeEach(async function () {
    const hashedPW = await bcryptjs.hash("secret", 8);
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


  //FIND VENNER
  describe("Find venner", function () {
    it("Find 2 venner ved logget ind.", async () => {
        const response = await request
        .get("/api/friends/all")
        .auth("pp@b.dk", "secret");
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(3);
    });

    it("Find ingen venner, uden login.", async () => {
        const response = await request.get("/api/friends/all");
        expect(response.status).to.be.equal(401);
    });
});

//TILFØJ VEN
  describe("Tilføj ven", function () {
    it("Oprette en ny ven med navn Morten", async () => {
      const newFriend = {
        firstName: "Morten",
        lastName: "Rasmussen",
        email: "morten@b.dk",
        password: "secret",
      };
      const response = await request.post("/api/friends").send(newFriend);
      expect(response.status).to.equal(200);
      expect(response.body.id).to.be.not.null;
    });

    it("Tilføj ven med forkort adgangskode (JOI)", async () => {
      const newFriend = {
        firstName: "Morten",
        lastName: "Vang",
        email: "mortenvang@b.dk",
        password: "se",
      };

      const response = await request.post("/api/friends").send(newFriend);
      expect(response.status).to.be.equal(400);
      expect(response.body.msg).to.be.equal(
        `"password" length must be at least 4 characters long`
      );
    });
  });
  //VED LOGGET IND
  describe("Når man er logget ind.", function () {
    it("Se oplysninger om dig selv.", async () => {
      const response = await request
        .get("/api/friends/me")
        .auth("pp@b.dk", "secret");
      expect(response.body.firstName).to.be.equal("Peter");
      expect(response.body.lastName).to.be.equal("Pan");
    });
    it("Rediger oplysninger om dig selv.", async () => {
      const newPeter = {
        firstName: "Marcus",
        lastName: "Pan",
        email: "pp@b.dk",
        password: "secret",
      };
      const response = await request
        .put("/api/friends/editme")
        .auth("pp@b.dk", "secret")
        .send(newPeter);
      expect(response.status).to.be.equal(200);
      expect(response.body.firstName).to.be.equal("Marcus");
      const theNewPeter = await friendCollection.findOne({ email: "pp@b.dk" });
      expect(theNewPeter.firstName).to.be.equal("Marcus");
    });
  });
});