const { index, show, create, update, destroy } = require("../purchasesController")
const purchases = require("../data/purchases.json");

describe("index()", () => {
    it("should return a statement if no products have been purchased", () => {
        const input = [];
        const actual = index(input);
        const expected = "No products purchased.";
        expect(actual).toEqual(expected);
    })
})

describe("destroy()", () => {
    it("should return a statement if no product have id that matches", () => {
        const input = purchases
        const id = 5
        const actual = destroy(input, id)
        const expected = "No Products Match Id"
        expect(actual).toEqual(expected);
    })
})