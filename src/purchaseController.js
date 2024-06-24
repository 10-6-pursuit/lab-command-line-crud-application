const { nanoid } = require("nanoid");
const chalk = require("chalk");
const inform = console.log;

function index(purchases) {
  return purchases.map((purchase) => ({
    id: purchase.id,
    name: purchase.name,
  }));
}

function create(purchases, values) {
  const [name, amount] = values;
  const donation = roundToTwo(Math.ceil(amount) - amount);
  const newPurchase = {
    id: nanoid(6),
    name,
    amount: parseFloat(amount),
    donation,
  };
  purchases.push(newPurchase);
  return purchases;
}

function show(purchases, id) {
  const purchase = purchases.find((purchase) => purchase.id === id);
  if (!purchase) {
    return chalk.red(`Purchase with ID ${id} not found.`);
  }
  return `${chalk.green("ID")}: ${purchase.id}\n${chalk.green("Name")}: ${
    purchase.name
  }\n${chalk.green("Amount")}: ${purchase.amount}\n${chalk.green(
    "Donation"
  )}: ${chalk.yellow(purchase.donation)}`;
}

function destroy(purchases, purchaseId) {
  const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
  if (index > -1) {
    purchases.splice(index, 1);
    inform("Purchase successfully removed from collection");
  } else {
    inform("Purchase not found. No action taken");
  }
  return purchases;
}

function update(purchases, values) {
  const id = values.find((ele) => ele.split("=")[0] === "id").split("=")[1];
  const index = purchases.findIndex((purchase) => purchase.id === id);

  if (index !== -1) {
    values.forEach((prop) => {
      const [key, value] = prop.split("=");
      purchases[index][key] = key === "amount" ? parseFloat(value) : value;
      if (key === "amount") {
        purchases[index].donation = roundToTwo(Math.ceil(value) - value);
      }
    });
    inform("Purchase successfully updated");
  } else {
    inform("Purchase not found. No action taken");
  }

  return purchases;
}

function total(purchases) {
  return purchases.reduce((acc, purchase) => acc + purchase.donation, 0);
}

function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}

module.exports = { create, index, show, update, destroy, total };





/*

### `index`

```javascript
function index(purchases) {
  return purchases.map((purchase) => ({
    id: purchase.id,
    name: purchase.name,
  }));
}
```

**Purpose**: The `index` function takes an array of purchases as input and returns an array of objects containing only the `id` and `name` properties of each purchase. This function is used to generate a list of purchases for display.

**Explanation**:
- It takes an array of purchases (`purchases`) as an argument.
- It uses the `map` method to iterate over each purchase in the `purchases` array.
- For each purchase, it creates a new object with properties `id` and `name` extracted from the original purchase.
- It returns an array of these new objects, representing a simplified version of each purchase.

### `create`

```javascript
function create(purchases, values) {
  const [name, amount] = values;
  const donation = roundToTwo(Math.ceil(amount) - amount);
  const newPurchase = {
    id: nanoid(6),
    name,
    amount: parseFloat(amount),
    donation,
  };
  purchases.push(newPurchase);
  return purchases;
}
```

**Purpose**: The `create` function adds a new purchase to the list of purchases.

**Explanation**:
- It takes two arguments: `purchases`, which is an array of existing purchases, and `values`, which is an array containing the name and amount of the new purchase.
- It extracts the `name` and `amount` from the `values` array.
- It calculates the donation amount by rounding up the amount to the nearest whole number and subtracting it from the original amount.
- It generates a unique ID for the new purchase using the `nanoid` function.
- It creates a new purchase object with the extracted values and the generated ID.
- It adds the new purchase to the `purchases` array.
- It returns the updated `purchases` array with the new purchase added.

### `show`

```javascript
function show(purchases, id) {
  const purchase = purchases.find((purchase) => purchase.id === id);
  if (!purchase) {
    return chalk.red(`Purchase with ID ${id} not found.`);
  }
  return `${chalk.green("ID")}: ${purchase.id}\n${chalk.green("Name")}: ${
    purchase.name
  }\n${chalk.green("Amount")}: ${purchase.amount}\n${chalk.green(
    "Donation"
  )}: ${chalk.yellow(purchase.donation)}`;
}
```

**Purpose**: The `show` function displays details of a specific purchase.

**Explanation**:
- It takes two arguments: `purchases`, which is an array of existing purchases, and `id`, which is the ID of the purchase to display.
- It uses the `find` method to search for a purchase with the specified ID in the `purchases` array.
- If the purchase is not found, it returns a message indicating that the purchase with the specified ID was not found.
- If the purchase is found, it returns a formatted string containing the details of the purchase, including ID, name, amount, and donation, with appropriate styling using `chalk`.

### `destroy`

```javascript
function destroy(purchases, purchaseId) {
  const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
  if (index > -1) {
    purchases.splice(index, 1);
    inform("Purchase successfully removed from collection");
  } else {
    inform("Purchase not found. No action taken");
  }
  return purchases;
}
```

**Purpose**: The `destroy` function removes a purchase from the list of purchases.

**Explanation**:
- It takes two arguments: `purchases`, which is an array of existing purchases, and `purchaseId`, which is the ID of the purchase to remove.
- It uses the `findIndex` method to find the index of the purchase with the specified ID in the `purchases` array.
- If the purchase is found (i.e., index is greater than -1), it removes the purchase from the array using the `splice` method.
- It informs the user that the purchase was successfully removed if it was found, or that no action was taken if the purchase was not found.
- It returns the updated `purchases` array.

### `update`

```javascript
function update(purchases, values) {
  const id = values.find((ele) => ele.split("=")[0] === "id").split("=")[1];
  const index = purchases.findIndex((purchase) => purchase.id === id);

  if (index !== -1) {
    values.forEach((prop) => {
      const [key, value] = prop.split("=");
      purchases[index][key] = key === "amount" ? parseFloat(value) : value;
      if (key === "amount") {
        purchases[index].donation = roundToTwo(Math.ceil(value) - value);
      }
    });
    inform("Purchase successfully updated");
  } else {
    inform("Purchase not found. No action taken");
  }

  return purchases;
}
```

**Purpose**: The `update` function modifies an existing purchase.

**Explanation**:
- It takes two arguments: `purchases`, which is an array of existing purchases, and `values`, which is an array containing the updated properties of the purchase.
- It extracts the ID of the purchase to be updated from the `values` array.
- It finds the index of the purchase with the specified ID in the `purchases` array.
- If the purchase is found (i.e., index is not -1), it iterates over the `values` array to update the properties of the purchase accordingly.
- If the updated property is `amount`, it also recalculates the donation amount based on the new amount.
- It informs the user that the purchase was successfully updated if it was found, or that no action was taken if the purchase was not found.
- It returns the updated `purchases` array.

### `total`

```javascript
function total(purchases) {
  return purchases.reduce((acc, purchase) => acc + purchase.donation, 0);
}
```

**Purpose**: The `total` function calculates the total donation amount.

**Explanation**:
- It takes one argument: `purchases`, which is an array of existing purchases.
- It uses the `reduce` method to iterate over the `purchases` array and calculate the total donation amount.
- It initializes the accumulator (`acc`) to 0 and adds the donation amount of each purchase to it.
- It returns the total donation amount.

These explanations should provide you with a clear understanding of each function's purpose and how it works within the `purchaseController.js` file. If you have any further questions or need additional clarification, feel free to ask


*/

// function create(purchases, values) {
//   const [name, amount, donation] = values;
//   const purchase = {
//     id: nanoid(4),
//     name,
//     amount,
//     donation,
//   };
//   purchases.push(purchase);
//   return purchases;
//   };

  // function update(purchases, id, values) {
  //   const index = purchases.findIndex((purchase) => purchase.id === id);

  // const [name, amount, donation] = values;

  // purchases[index].name = name;
  // purchases[index].amount = amount;
  // purchases[index].donation = donation;
  //   };


  // function update(purchases, values) {
  //   const id = values.find((ele) => ele.split("=") [0] === "id").split("=")[1];
  
  //   const index = purchases.findIndex((purchase) => purchase.id === id);

  //   values.forEach((prop) => {
  //     const [key, value] = prop.split("=");
  //     purchase[index][key] = values;
  //   });
  
  // }





// function index(purchases) {
//     return purchases.map((purchase) => purchase.id + " " + purchase.name).join("\n");
//   }


// function show(purchases, purchaseId) {
//     const purchase = purchases.find((purchase) => purchase.id === purchaseId);
//     return purchase.id + " " + purchase.name + " " + purchase.points + " points";
//   }


// function destroy(purchases, purchaseId) {
//   const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
//   if (index > -1) {
//     purchases.splice(index, 1);
//     inform("purchase successfully removed from collection");
//     return purchases;
//   } else {
//     inform("purchase not found. No action taken");
//     return purchases;
//   }
// }


// function edit(purchases, purchaseId, updatedpurchase) {
//   const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
//   if (index > -1) {
//     purchases[index].id = purchaseId;
//     purchases[index].name = updatedpurchase;
//     purchases[index].points = purchasePoints[updatedpurchase];
//     inform("purchase successfully updated");
//     return purchases;
//   } else {
//     inform("purchase not found. No action taken");
//     return purchases;
//   }
// }

