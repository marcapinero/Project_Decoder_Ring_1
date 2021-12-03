// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

// 1st Test: It checks if the value returns false if the shift value is equal to 0
describe("caesaraverageScore", () => {
  it("should return false if the shift amount is 0", () => {
    const message = "zebra magazine";
    const shift = 0;
    const actual = caesarModule.caesar(message, shift);
    expect(actual).to.be.false; 
  });
    });

// 2nd Test: It checks if shift value is less than -25
describe("caesaraverageScore", () => {
it("should return false if the shift amount is less than -25", () => {
  const message = "zebra magazine";
  const shift = -26;
  const actual = caesarModule.caesar(message, shift);
  expect(actual).to.be.false;   
})
});

// 3rd Test: It checks if shift value is greater than 25
describe("caesaraverageScore", () => {
  it("should return false if the shift amount is less than -25", () => {
    const message = "zebra magazine";
    const shift = 26;
    const actual = caesarModule.caesar(message, shift);
    expect(actual).to.be.false;   
  })
  });
 
  // 4th Test: It checks if shift value is not present.
describe("caesaraverageScore", () => {
  it("should check to see if shift value is not present", () => {
  const message = "zebra magazine";
  const actual = caesarModule.caesar(message);
  expect(actual).to.be.false;
  })
})

// 5th Test: Checks to see if function ignores capital letters. (For example, the results of A Message and a message should be the same.)
describe("caesarAverageScore", () => {
  it("should make sure that the function ignores capital letters", () => {
    const message = "ZEBRA MAGAZINE";
    const shift = 3;
    const actual = caesarModule.caesar(message, shift);
    expect(actual).to.equal("cheud pdjdclqh");
  })
})
// 6th Test: It checks when encoding, if shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
describe("caesarAverageScore", () => {
  it("when encoding the function should check if the shift goes past alphabet and it loops back around to A", () => {
    const message = "zebra magazine"
    const shift = 3;
    const actual = caesarModule.caesar(message, shift, encode = true);
    expect(actual).to.equal("cheud pdjdclqh")
  })
})

// 7th Test: It checks when decoding, if shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
describe("caesarAverageScore", () => {
  it("when decoding the function should check if the shift goes past alphabet and it loops back around to A", () => {
    const message = "cheud pdjdclqh"
    const shift = 3;
    const actual = caesarModule.caesar(message, shift, encode = false);
    expect(actual).to.equal("zebra magazine")
  })
})

// 8th Test: It checks if the function maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
describe("caesarAverageScore", () => {
  it("should make sure code skips over spaces and nonalphebtical symbols in message", () => {
    const message = "zebra magazine!"
    const shift = 3;
    const actual = caesarModule.caesar(message, shift);
    expect(actual).to.equal("cheud pdjdclqh!")
  })
})