const chalk = require("chalk");

function index(purchases) {
    return purchases.map((purchase) => ({
        [purchase.id] : purchase.name,
    }))
}

function show(purchases, id) {
    const purchase = purchases.find((purchase) => purchase.id === id);

    `${chalk.green("id")} ${id} ${chalk.green("name")} ${purchase.name} ${chalk.green("amount")} ${purchase.amount} ${chalk.green("donation")} ${chalk.yellow(purchase.donation)}`;
}

function create() {

}

function update() {

}

function destroy() {

}

module.exports = { index, show, create, update, destroy };