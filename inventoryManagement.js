let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 1. Log first product
function logFirstProduct() {
  console.log(products[0]);
}

// 2. Add a product
function addProduct(productName) {
  products.push(productName);
}

// 3. Update product name
function updateProductName(position, newName) {
  products[position] = newName;
  console.log(`Product at position ${position} has been updated to ${newName}`);
}

// 4. Remove last product
function removeLastProduct() {
  const removed = products.pop();
  console.log(`${removed} has been removed from the product list.`);
}

module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
};
