// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    // describe("error handling", () => {
        
    // });

    describe("encoding a message", () => {
        it("should encode a message by translating each letter to a number", () => {
            const expected = '3251131343';
            const actual = polybius('hello');
            expect(actual).to.equal(expected)
        });

        it("should maintain spaces in the message after encoding", () => {
            const expected = "2345 23513434112251";
            const actual = polybius('my message');
            expect(actual).to.equal(expected)
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by translating pairs of numbers into a character", () => {
            const expected = 'hello';
            const actual = polybius('3251131343', encode = false);
            expect(actual).to.equal(expected)
        });

        it("should return false if the length of the numbers is odd", () => {
            const actual = polybius('3242424', encode = false)
            expect(actual).to.be.false;
        });

        it("should maintain spaces in the message after decoding", () => {
            const expected = "my message";
            const actual = polybius('2345 23513434112251', encode = false);
            expect(actual).to.eql(expected)
        });
    });


});