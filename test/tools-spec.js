const expect = require("chai").expect;
const tools = require("../lib/tools");
const nock = require("nock");


describe("Tools", function () {

  describe("printName()", function() {

    it("should print the last name first", function () {
      var results = tools.printName({ first: "Mary", last: "Franks"});
      expect(results).to.equal("Franks, Mary");
    });

  });

  describe("loadWiki()", function() {

    before(function() {

      nock("https://en.wikipedia.org")
        .get("/wiki/Abraham_Lincoln")
        .reply(200, "Mock Abraham Lincoln Page");

    });

    it ("Load Abraham Lincoln's wikipedia page", function(done) {
      tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
        expect(html).to.equal("Mock Abraham Lincoln Page");
        done();
      });
    });
  });


});
