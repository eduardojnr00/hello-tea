const expect = require('chai').expect;
const myapp = require(".");

describe('Testing printing function', () => {
	it('Should Return Keep Suport Tea Project', () => {
         	expect(myapp.printMsg()).to.equal("Hello, Tea!");
	});
});