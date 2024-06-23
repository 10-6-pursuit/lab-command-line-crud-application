const { nanoid } = require("nanoid");
const chalk = require("chalk");

function index (purchases) {
    return purchases.map(purchase => ({[purchase.id]: purchase.name}))
}

function create(purchases, newPurchase) {
    const [name, amount, donation] = newPurchase;
    const purchase = {
        id: nanoid(8),
        name: name,
        amount: amount,
        donation: donation
    }
    purchases.push(purchase);
    return purchases;
}

function update (purchases, values) {
    const id = values.find( val => val.split("=")[0] === "id").split("=")[1];
    const index = purchases.findIndex(purchase => purchase.id === id);

    values.forEach(prop => {
        const [key, value] = prop.split("=");
        purchases[index][key] = value;
    })
    return purchases;
}

function remove (purchases, id) {
    return purchases.filter(purch => purch.id !== id);
}


function show (purchases, identifier) {
    const purchase = purchases.find(purch => purch.id === identifier);
    const {id, name, amount, donation} = purchase;
    return `${chalk.greenBright("id")} ${id} ${chalk.greenBright("name")} ${name} ${chalk.greenBright("amount")} ${amount} ${chalk.greenBright("donation")} ${chalk.yellow(donation)}`
}

function clear (cartData) {
    cartData = [];
    return cartData;
}

module.exports = {index, create, update, remove, show, clear};