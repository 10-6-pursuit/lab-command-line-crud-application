const {
  index,
  show,
  create,
  update,
  destroy,
} = require("./src/purchasesController");
const { readJSONFile, writeJSONFile } = require("./src/helpers");
const chalk = require("chalk");
const purchases = readJSONFile("./data", "purchases.json");

const inform = console.log;
const userInput = process.argv[2];
function run() {
  let writeToFile = false;
  let updatePurchases = [];
  switch (userInput) {
    case "index":
      const formattedPurchases = index(purchases);
      inform(chalk.blue.bold(formattedPurchases));
      break;
    case "show":
      const purchase = show(purchases, process.argv[3]);
      inform(purchase);
      break;
    case "create":
      const newPurchase = create(
        purchases,
        process.argv[3],
        process.argv[4],
        process.argv[5]
      );
      writeToFile = true;
      inform(newPurchase);
      break;
    case "update":
      const updatedPurchases = update(purchases, process.argv.slice(3));
      inform(updatedPurchases);
      break;
    case "destroy":
      const destroyedPurchases = destroy(purchases, process.argv[3]);
      inform(destroyedPurchases);
      break;
  }
}

run();

module.exports = { run };
