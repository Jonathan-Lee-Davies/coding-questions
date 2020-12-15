const expect = require("chai").expect;

const isURL = require("./isURL.js");

describe("isURL.js", function () {

    it.only("Replace whitespace with %20", function () {

        expect(isURL('Hello world it is Thursday')).to.equal('Hello%20world%20it%20is%20Thursday');
        expect(isURL('My name is Jonny')).to.equal('My%20name%20is%20Jonny');
        expect(isURL('Hello there')).to.not.equal('Hello there');
    });

});
