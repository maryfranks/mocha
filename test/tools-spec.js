const expect = require("chai").expect;
const tools = require("../lib/tools");


describe("Tools", function () {

  describe("printName()", function() {

    it("should print the last name first", function () {
      var results = tools.printName({ first: "Mary", last: "Franks"});
      expect(results).to.equal("Franks, Mary");
    });

  });


});
