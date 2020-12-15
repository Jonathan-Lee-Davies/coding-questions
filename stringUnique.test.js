const expect = require( "chai" ).expect;

const stringUnique = require( "./stringUnique" );

describe( "stringUnique.js", function () {

  it( "All characters in a string are unique", function() {

    expect( stringUnique( "benny" ) ).to.be.false;
    expect( stringUnique( "ben" ) ).to.be.true;
    expect( stringUnique( "alex" ) ).to.be.true;
    expect( stringUnique( "gillian" ) ).to.be.false;

  });

});