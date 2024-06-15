const { nanoid } = require("nanoid");
const chalk = require("chalk");

function index(purchases) {
  return purchases.map((purchase) => `${purchase.id} ${purchase.name}`);
}
function show(purchases, purchaseId) {
  const purchase = purchases.find((purchase) => purchase.id === purchaseId);

  return `${chalk.green.bold("ID")} ${purchase.id} ${chalk.green.bold(
    "Name"
  )} ${purchase.name} ${chalk.green.bold("Amount")} ${
    purchase.amount
  } ${chalk.green.bold("Donation")} ${chalk.yellow(purchase.donation)}}`;
}
function create(purchases, ...values) {
  const [name, amount, donation] = values;
  const purchase = {
    id: nanoid(4),
    name,
    amount,
    donation,
  };
  purchases.push(purchase);
  return purchases;
}
function update(purchases, values) {
  const id = values.find((ele) => ele.split("=")[0] === "id").split("=")[1];
  const index = purchases.findIndex((purchase) => purchase.id === id);

  values.forEach((prop) => {
    const [key, value] = prop.split("=");
    return (purchases[index][key] = value);
  });

  return purchases;
}
function destroy(purchases, id) {
  return purchases.filter((purchase) => purchase.id !== id);
}

module.exports = { index, show, create, update, destroy };
