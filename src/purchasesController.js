function index(purchases) {
    return purchases.map((purchase) => ({
        [purchase.id] : purchase.name,
    }))
}

function show() {

}

function create() {

}

function update() {

}

function destroy() {

}

module.exports = { index, show, create, update, destroy };