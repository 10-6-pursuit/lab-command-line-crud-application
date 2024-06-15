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
  const [name, amount] = values; // Destructure values from the input
  const purchase = {
    id: nanoid(),
    name,
    amount: parseFloat(amount),
    donation: parseFloat((Math.ceil(amount) - amount).toFixed(2)),
  };
  purchases.push(purchase); // Push the purchase to the array
  return purchases;
}

function show(purchases, id) {
  const purchase = purchases.find((purchase) => purchase.id === id);
  if (purchase) {
    return `${chalk.green("id")} ${purchase.id} ${chalk.green("name")} ${
      purchase.name
    } ${chalk.green("amount")} ${purchase.amount} ${chalk.green("donation")} ${chalk.yellow(purchase.donation)}`;
  } else {
    return chalk.red("Purchase not found");
  }
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
  if (index > -1) {
    values.forEach((prop) => {
      const [key, value] = prop.split("=");
      purchases[index][key] = value;
    });
    inform("Purchase successfully updated");
  } else {
    inform("Purchase not found. No action taken");
  }
  return purchases;
}

module.exports = { create, index, show, destroy, update };



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

