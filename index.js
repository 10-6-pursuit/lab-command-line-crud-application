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
      break;
    case "show":
      break;
    case "update":
      break;
    case "destroy":
      break;
  }
}

run();
