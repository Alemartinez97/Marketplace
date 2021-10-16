const request = require("supertest");
const app = require("../app");
describe("GET /api/items", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api/items/?query=Autos")
      .set("Accept", "application/json")
      .expect(200)
      .expect((response) => response.headers["content-type"])
      .end(done);
  });
  
});
describe("GET /api/items", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api/item/MLA910710283")
      .set("Accept", "application/json")
      .expect(200)
      .expect((response) => response.headers["content-type"])
      .end(done);
  });
  
});
