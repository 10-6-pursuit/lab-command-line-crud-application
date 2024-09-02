const { nanoid } = require("nanoid");

function create(purchases, purchaseName) {
    const purchase = { name: purchaseName, id: nanoid(4), amount:amount, points: purchasePoints[purchaseName] };
    purchases.push(purchase);
    return purchases;
  }

  function show(purchases, purchaseId) {
    const purchase = purchases.find((purchase) => purchase.id === purchaseId);
    return purchase;
  }

  
  function update(purchases, purchaseId, purchaseName) {
    const purchase = purchases.find((purchase) => purchase.id === purchaseId);
    purchase.name = purchaseName;
    return purchases;
  }

  function destroy(purchases, purchaseId) {
    const purchaseIndex = purchases.findIndex((purchase) => purchase.id === purchaseId);
    purchases.splice(purchaseIndex, 1);
    return purchases;
  }

  module.exports = {
    create,
    show,
    update,
    destroy,
  };
