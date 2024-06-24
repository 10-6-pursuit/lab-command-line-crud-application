const chalk = require("chalk");
const { index, show, create, update, destroy, total } = require("./src/purchaseController");
const { writeJSONFile, readJSONFile } = require("./src/helpers");

const inform = console.log;

function run() {
  let purchases = readJSONFile("./data", "purchases.json");
  let writeToFile = false;
  let updatedPurchases = [];
  const action = process.argv[2];

  switch (action) {
    case "index":
      const purchaseList = index(purchases);
      inform(purchaseList);
      break;
    case "show":
      const purchaseToShow = show(purchases, process.argv[3]);
      inform(purchaseToShow);
      break;
    case "create":
      const newPurchases = create(purchases, process.argv.slice(3));
      inform(newPurchases);
      writeToFile = true;
      updatedPurchases = newPurchases;
      break;
    case "update":
      const modifiedPurchases = update(purchases, process.argv.slice(3));
      inform(modifiedPurchases);
      writeToFile = true;
      updatedPurchases = modifiedPurchases;
      break;
    case "destroy":
      const remainingPurchases = destroy(purchases, process.argv[3]);
      inform(remainingPurchases);
      writeToFile = true;
      updatedPurchases = remainingPurchases;
      break;
    case "total":
      const totalDonationAmount = total(purchases);
      inform(`Total donations: ${chalk.yellow(totalDonationAmount.toFixed(2))}`);
      break;
    default:
      inform("Invalid action.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "purchases.json", updatedPurchases);
  }
}

run();




/*

To check that each function in`index.js` file works as expected,  manually test them by running your Node.js application with different command line arguments. Like this:

1. **index**:
   ```bash
   node index.js index
   ```

2. **show**:
   ```bash
   node index.js show [purchaseId]
   ```
   Replace `[purchaseId]` with the ID of an existing purchase.

3. **create**:
   ```bash
   node index.js create [name] [amount]
   ```
   Replace `[name]` with the name of the purchase and `[amount]` with the amount.

4. **update**:
   ```bash
   node index.js update [id=value] [name=value] [amount=value]
   ```
   Replace `[id=value]`, `[name=value]`, and `[amount=value]` with the ID and new values for the purchase.

5. **destroy**:
   ```bash
   node index.js destroy [purchaseId]
   ```
   Replace `[purchaseId]` with the ID of the purchase you want to delete.

6. **total**:
   ```bash
   node index.js total
   ```
///////////////////////////////////

Keep the following in mind

1. **index**:
   ```bash
   node index.js index
   ```
   Expected output:
   ```
   [{ id: '9bPDQA', name: 'Shoes' },
    { id: 'xKHbEA', name: 'red shoes' },
    { id: '5_Pmzv', name: 'cats' }]
   ```

2. **show**:
   ```bash
   node index.js show 9bPDQA
   ```
   Expected output:
   ```
   ID: 9bPDQA
   Name: Shoes
   Amount: 50
   Donation: 0
   ```

3. **create**:
   ```bash
   node index.js create "blue shoes" 60
   ```
   Expected output:
   ```
   [{ id: '9bPDQA', name: 'Shoes', amount: 50, donation: 0 },
    { id: 'xKHbEA', name: 'red shoes', amount: 30, donation: 0 },
    { id: '5_Pmzv', name: 'cats', amount: 89, donation: 0 },
    { id: 'randomId', name: 'blue shoes', amount: 60, donation: 0 }]
   ```
   Replace `'randomId'` with the actual generated ID.

4. **update**:
   ```bash
   node index.js update id=5_Pmzv name="black cats" amount=100
   ```
   Expected output:
   ```
   [{ id: '9bPDQA', name: 'Shoes', amount: 50, donation: 0 },
    { id: 'xKHbEA', name: 'red shoes', amount: 30, donation: 0 },
    { id: '5_Pmzv', name: 'black cats', amount: 100, donation: 10 }]
   ```

5. **destroy**:
   ```bash
   node index.js destroy xKHbEA
   ```
   Expected output:
   ```
   [{ id: '9bPDQA', name: 'Shoes', amount: 50, donation: 0 },
    { id: '5_Pmzv', name: 'black cats', amount: 100, donation: 10 }]
   ```

6. **total**:
   ```bash
   node index.js total
   ```
   Expected output:
   ```
   Total donations: 10
   ```

Run these commands and compare the output with the expected results. If any function does not produce the expected output, you may need to troubleshoot your code to identify and fix the issue.


*/
