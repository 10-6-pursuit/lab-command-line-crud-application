const { nanoid } = require("nanoid");
const purchases = require("./data/purchases.json");
const { index, show, create, update, destroy } = require("./purchasesController")

const inform = console.log;

const userInput = process.argv[2]

function run() {
    switch (userInput) {
        case "index":
            const formattedPurchase = index(purchases)
            inform(formattedPurchase)
            break;
        case "show":
            const singlePurchase = show(purchases,process.argv[3])
            inform(singlePurchase)
            break;
        case "create":
            break;
        case "update":
            break;
        case "destroy":
            break;
    }
}

run()