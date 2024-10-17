// Create an object class to store the product to store id, name amd price.

// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Create an object class for the shopping cart item to store the props for the products and it's quantity.
class ProductInfo extends Product {
  constructor(id, name, price, quantity) {
    super(id, name, price);
    this.quantity = quantity;
  }
  getProductTotal() {
    console.log("Sum");
  }
}

// *********

// Create another object class for the shopping cart which contains an array of shoppingCartItems
class ShoppingCartItems {
  constructor(cartItems) {
    this.cartItems = cartItems;
  }

  getNumbersOfItemsInCart() {
    console.log("legnth");
  }

  //   Increase quantity
  increaseQuantity() {
    console.log("+");
  }

  //   Decrease quantity
  decreaseQuantity() {
    console.log("-");
  }

  //   Remove Item
  removeCart() {
    console.log("remoce");
  }

  // Display CartItems
  displayCartItems() {
    console.log("display");
  }
}

// Cart items

let cartItems = [
  new ProductInfo(1, "Iphone 6", 1000, 1),
  new ProductInfo(2, "bag", 500, 1),
  new ProductInfo(3, "Pink rose", 3400, 1),
];

// Create a new instance of shopping Cart

const ShoppingCart = new ShoppingCartItems(cartItems);

// Display all cart items
ShoppingCart.displayCartItems();
