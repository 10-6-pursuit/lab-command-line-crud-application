
const {index, create, remove, update, show, clear} = require("./src/purchasesController");
const {readJSONFile, writeJSONFile } = require("./src/helpers");

const chalk = require("chalk");
const argValues = process.argv.slice(3);
const purchases = readJSONFile("./data","purchases.json");
const id = process.argv[3];
const inform = console.log;
const userInput = process.argv[2];
let updatedPurchases = [];
let writeToFile = false;

function run () {
    switch(userInput){
        case "index":
            inform(index(purchases));
        break;
        case "create":
            updatedPurchases = create(purchases, argValues);
            inform(chalk.yellow("Item Created"));
            writeToFile = true;

        break;
        case "update":
             updatedPurchases = update(purchases, argValues);
            inform(chalk.yellow("Item Updated"));
            writeToFile = true;
        break;
        case "remove":
            updatedPurchases = remove(purchases, id);
            inform(chalk.yellow("Item Removed"));
            writeToFile = true;
        break;
        case "show":
            inform(show(purchases, id));
        break;
        case "clear":
            updatedPurchases = clear(purchases);
            writeToFile = true;
        break;
    };

    if(writeToFile){
        writeJSONFile("./data", "purchases.json", updatedPurchases)
    };

};
run();