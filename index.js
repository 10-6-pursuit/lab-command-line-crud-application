const { nanoid } = require("nanoid");
const chalk = require("chalk");
const purchases = require("./data/purchases.json");
const { index, show, create, update, destroy } = require("./src/purchasesController.js");

const input = process.argv[2];

function run() {
  switch (input) {
    case "index":
      const formattedPurchase = index(purchases);
      console.log(formattedPurchase);
      break;
    case "create":
      const newPurchases = create(purchases, values);
      console.log(newPurchases);
      break;
    case "show":
      console.log(show(purchases, 1))
      break;
    case "update":
      const updatedPurchases = update(purchases, process.argv.splice(3));
      console.log(updatedPurchases);
      break;
    case "destroy":
      break;
  }
}

run();
