const chalk = require("chalk")

function index(purchases) {
    return purchases.map(purchase => ({[purchase.id]: purchase.name,}))
}

function show(purchases, purchaseId) {
    const purchase = purchases.find(purchase => purchase.id === purchaseId)
    return chalk.green("id") + ` ${purchase.id} ` + chalk.green("name") + ` ${purchase.name} ` + chalk.green("amount") + ` ${purchase.amount} ` + chalk.green("donation") + ` ${chalk.yellow(purchase.donation)}`
}

function create() {

}

function update() {

}

function destroy() {

}

module.exports = { index, show, create, update, destroy }