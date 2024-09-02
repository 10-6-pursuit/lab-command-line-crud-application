// give console.log an alias
// When providing user feedback use `inform`
// When developing/debugging use `console.log`

import { purchase } from "./purchases.js";
import { readJSONFile, writeJSONFile } from "./src/helpers.js";

const inform = console.log;

function run() {
  const action = process.argv[2];
  const purchase= process.argv[3];
  let purchases= readJSONFile("./data", "purchases.json");
  let writeToFile = false;
  let updatedAnimals = [];

  switch (action) {
    
    case "index":
      inform(action, purchases);
      break;
    case "create":
      inform(action, purchase);
      writeToFile = true;
      break;
    case "show":
      inform(action, purchase);
      break;
    case "update":
      inform(action, purchase);
      writeToFile = true;
      break;
    case "destroy":
      inform(action, purchase);
      writeToFile = true;
      break;
    case "score":
      inform(action);
      break;
    default:
      inform("There was an error.");
  }
}
run();