const { nanoid } = require("nanoid");
const chalk = require("chalk");
const { index, show, create, update, destroy } = require("./src/purchaseController");
const { writeJSONFile, readJSONFile } = require("./src/helpers");

const inform = console.log;

function run() {
  let purchases = readJSONFile("./data", "purchases.json");
  let writeToFile = false;
  let updatedPurchases = [];
  const action = process.argv[2];

  switch (action) {
    case "index":
      inform(index(purchases));
      break;
    case "show":
      const purchaseToShow = show(purchases, process.argv[3]);
      inform(purchaseToShow);
      break;
    case "create":
      updatedPurchases = create(purchases, process.argv.slice(3));
      inform(updatedPurchases);
      writeToFile = true;
      break;
    case "update":
      updatedPurchases = update(purchases, process.argv.slice(3));
      inform(updatedPurchases);
      writeToFile = true;
      break;
    case "destroy":
      updatedPurchases = destroy(purchases, process.argv[3]);
      inform(updatedPurchases);
      writeToFile = true;
      break;
    default:
      inform("Invalid action.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "purchases.json", updatedPurchases);
  }
}

run();
