const { readFile, writeFile } = require(`./src/purchaseController`);
const { create, index,show, destroy,update } = require(`./src/helpers`);
const chalk = require('chalk');

function run() {
  const purchases = readFile(`data`, `purchases.json`);
  const action = process.argv[2];
  const purchaseName = process.argv[3];
  const amount = process.argv[4]||0;
  const donation = process.argv[5]||0;
  const purchaseId=process.argv[3];
  const purchaseN=process.argv[4]
  const purchaseA=process.argv[5]
  const purchaseD=process.argv[6]

  let updatedList = [];
  let writeToFile = false;
  switch (action) {
    case `create`:
      updatedList = create(purchases, purchaseName, amount, donation);
      writeToFile = true;
      break;
      case `index`:
        console.log(index(purchases))
        writeToFile=false;
        break;
        case `show`:
            console.log(show(purchases,purchaseId))
            writeToFile=false;
            break;
        case `destroy`:
            updatedList=destroy(purchases,purchaseId);
            writeToFile=true;
            break;
        case `update`:
            updatedList=update(purchases,purchaseId,purchaseN,purchaseA,purchaseD);
            writeToFile=true;
            break;
  }
  if (writeToFile) {
    writeFile(`data`, `purchases.json`, updatedList);
  }
}
run();
