function index(purchases) {
  return purchases.map((purchase) => ({
    [purchase.id]: purchase.name,
  }));
}

function create() {}

function show(purchases, id) {
    const purchase = purchases.find((purchase) => purchase.id === id);
}

function update() {}

function destroy() {}

module.exports = { index, show, create, update, destroy };
