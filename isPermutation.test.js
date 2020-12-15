const expect = require ("chai").expect;

const isPermutation = require ("./isPermutation.js")

describe ( "isPermutation.js", function () {

    it("The strings are permutations", function () {

        expect( isPermutation ( 'the', 'teh')).to.be.true;
        expect( isPermutation( 'cat', 'dog')).to.be.false;
        expect( isPermutation(' house', 'flat')).to.be.false;
        expect( isPermutation('car', 'rac')).to.be.true;
    } )
})