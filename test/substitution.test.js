// Write your tests here!
const expect = require('chai').expect
const substitutionModule = require('../src/substitution');
const substitution = require('../src/substitution');

describe('substitution', () => {
  it('should encode the message using the standard alphabet', () => {
    const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'jrufscpw'
    expect(actual).to.equal(expected);
  });
  
  it('should decode the message using the standard alphabet', () => {
    const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    const expected = 'thinkful'
    expect(actual).to.equal(expected);
  })
  
  it('should maintain spaces throughout and ignore capital letters', () => {
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    const expected = "elp xhm xf mbymwwmfj dne"
    expect(actual).to.equal(expected);
  })
  
  it('should return false if alphabet is not 26 characters', () => {
    const actual = substitutionModule.substitution("Howdy Neighbor", "abcdefg")
    const expected = false;
    expect(actual).to.equal(expected);
  })
  
  it('should return false if the alphabet contains repeated characters', () => {
    const actual = substitutionModule.substitution("Howdy Neighbor", "xxyqmcgrukswaflnthdjpzibev")
    const expected = false;
    expect(actual).to.equal(expected);
  })
  
  
})