// give console.log an alias
// When providing user feedback use `inform`
// When developing/debugging use `console.log`


im
const { writeJSONFile, readJSONFile } = require("./src/helpers.js");
const {
  create,
  destroy,
  edit,
  index,
  show,
} = require("./src/purchaseController.js");


const inform = console.log;

function run() {
  const action = process.argv[2];
  const purchase = process.argv[3];
  let purchases = readJSONFile("data", "purchases.json");
  let writeToFile = false;
  let updatedPurchases = [];
  switch (action) {
    case "index":
      const purchasesView = index(purchase);
      inform(purchasesView);
      break;
    case "create":
      updatedPurchases = create(purchases, purchase);
      writeToFile = true;
      break;
    case "show":
      const purchaseView = show(purchases, purchase);
      inform(purchaseView);
      break;
    case "update":
      updatedPurchases = edit(purchases, purchase, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedPurchases = destroy(purchases, purchase);
      writeToFile = true;
      break;
    case "score":
      const score = purchases.reduce((acc, curr) => acc + curr.points, 0);
      inform("Current score", score);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("data", "purchases.json", updatedPurchases);
  }
}
run();

