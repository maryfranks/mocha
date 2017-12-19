const expect = require("chai").expect;
const order = require("../lib/order");

describe("Ordering Items", function() {

  beforeEach(function(){

    this.testData = [
      {sku: "AAA", qty: 10},
      {sku: "BBB", qty: 0},
      {sku: "CCC", qty: 3}
    ];

  });

  it("order an item when there are enough in stock");

});
