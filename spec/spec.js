var app = require('../js/unitTest.js');

describe("app", function() {
  it("pow method", function() {

  	//prepare
  	var result;

  	//act
  	result = app.pow(3, 2);

  	//assert
  	expect(result).toBe(9);

  });
});

