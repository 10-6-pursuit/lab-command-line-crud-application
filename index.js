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
            const newPurchase = create(purchases, process.argv.slice(3))
            inform(newPurchase)
            break;
        case "update":
            const updatePurchases = update(purchases, process.argv.slice(3));
            inform(updatePurchases)
            break;
        case "destroy":
            const destroyedPurchases = destroy(purchases, process.argv[3])
            inform(destroyedPurchases)
            break;
    }
}

run()