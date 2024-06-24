const {
    create,
    index,
    show,
    update,
    destroy,
    total
  } = require('./src/purchaseController');
  
  // Mock data for testing
  let purchases = [];
  
  // Reset purchases before each test
  beforeEach(() => {
    purchases = [];
  });
  
  // Test create function
  test('creates a new purchase', () => {
    const values = ['Item', '10.50'];
  
    create(purchases, values);
  
    expect(purchases).toHaveLength(1);
  
    const newPurchase = purchases[0];
    expect(newPurchase).toHaveProperty('id');
    expect(newPurchase).toHaveProperty('name', 'Item');
    expect(newPurchase).toHaveProperty('amount', 10.50);
    expect(newPurchase).toHaveProperty('donation', 0.50);
  });
  
  // Test index function
  test('returns an index of purchases', () => {
    // Assuming there are existing purchases
    const existingPurchases = [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' }
    ];
    purchases.push(...existingPurchases);
  
    const indexResult = index(purchases);
  
    expect(indexResult).toHaveLength(existingPurchases.length);
  
    existingPurchases.forEach((purchase) => {
      expect(indexResult).toContainEqual({ id: purchase.id, name: purchase.name });
    });
  });
  
  // Test show function
  test('displays details of a specific purchase', () => {
    const purchase = { id: '1', name: 'Item', amount: 10.50, donation: 0.50 };
    purchases.push(purchase);
  
    const showResult = show(purchases, '1');
  
    expect(showResult).toContain(purchase.id);
    expect(showResult).toContain(purchase.name);
    expect(showResult).toContain(`${purchase.amount}`);
    expect(showResult).toContain(`${purchase.donation}`);
  });
  
  // Test update function
  test('updates an existing purchase', () => {
    const purchase = { id: '1', name: 'Item', amount: 10.50, donation: 0.50 };
    purchases.push(purchase);
  
    const updatedValues = ['2', 'New Item', '15.75'];
    update(purchases, updatedValues);
  
    const updatedPurchase = purchases[0];
    expect(updatedPurchase).toHaveProperty('id', '1'); // ID should not change
    expect(updatedPurchase).toHaveProperty('name', 'New Item');
    expect(updatedPurchase).toHaveProperty('amount', 15.75);
    expect(updatedPurchase).toHaveProperty('donation', 0.25); // Updated donation
  });
  
  // Test destroy function
  test('deletes a purchase', () => {
    const purchase = { id: '1', name: 'Item', amount: 10.50, donation: 0.50 };
    purchases.push(purchase);
  
    destroy(purchases, '1');
  
    expect(purchases).toHaveLength(0);
  });
  
  // Test total function
  test('calculates the total donation amount', () => {
    const purchase1 = { id: '1', name: 'Item 1', amount: 10.50, donation: 0.50 };
    const purchase2 = { id: '2', name: 'Item 2', amount: 15.75, donation: 0.25 };
    purchases.push(purchase1, purchase2);
  
    const totalAmount = total(purchases);
  
    expect(totalAmount).toBe(0.75); // Total donation from both purchases
  });
  