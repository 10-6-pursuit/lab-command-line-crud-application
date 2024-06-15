const chalk = require("chalk");
const nanoid = require("nanoid");

function index(purchases) {
    return purchases.map((purchase) => ({
        [purchase.id] : purchase.name,
    }))
}

function show(purchases, id) {
    const purchase = purchases.find((purchase) => purchase.id === id);

    `${chalk.green("id")} ${id} ${chalk.green("name")} ${purchase.name} ${chalk.green("amount")} ${purchase.amount} ${chalk.green("donation")} ${chalk.yellow(purchase.donation)}`;
}

function create(purchases, values) {
    const [name, amount, donation] = values;

    const purchase = {
        id: nanoid(),
        name,
        amount,
        donation
    };
    purchases.push(purchase);
    return purchases;
}

function update(purchases, id, values) {
    const index = purchases.findIndex((purchase) => purchase.id === id);

    const id = values.find((ele) => ele.split("=")[0] === "id").split("=")[1];

    values.forEach((prop) => {
        const [key, value] = prop.split("=");
        purchases[index][key] = value;
    });
    return purchases;
}

function destroy(purchases, id) {
    return purchases.filter((purchase) => purchase.id !== id);
}

module.exports = { index, show, create, update, destroy };