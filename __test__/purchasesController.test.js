const { index, show, create, update, destroy } = require("../purchasesController")

describe("index()", () => {
    it("should return a statement if no products have been purchased", () => {
        const input = [];
        const actual = index(input);
        const expected = "No products purchased.";
        expect(actual).toEqual(expected);
    })
})