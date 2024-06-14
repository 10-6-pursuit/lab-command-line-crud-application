const { nanoid } = require("nanoid");
const chalk = require('chalk');


function create(purchases,guestName,amount,donation){
    const newPurchase={
        id:nanoid(4),
        name:guestName,
        amount:amount,
        donation:donation,
    }
    purchases.push(newPurchase)
    return purchases

}
function index(purchases){
    return purchases.map(purchase=>`id ${chalk.green(purchase.id)} name ${chalk.red(purchase.name)} amount ${chalk.magenta(purchase.amount)} donation ${chalk.blueBright(purchase.donation)}`).join(`\n`)

}
function show(purchases,purchaseid){
    return purchases.find(purchase=>purchase.id===purchaseid)
}
function destroy(purchases,purchaseId){

    return purchases.filter(purchase=>purchase.id!==purchaseId)
}
function update(purchases,purchaseId,purchaseName,purchaseAmount,donation){
    let index=purchases.findIndex(purchase=>purchase.id===purchaseId);
    purchases[index].id=purchaseId;
    purchases[index].name=purchaseName;
    purchases[index].amount=purchaseAmount;
    purchases[index].donation=donation;
    return purchases

}
module.exports={create,index,show,destroy,update}
