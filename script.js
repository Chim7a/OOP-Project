// Create an object class to store the product to store id, name amd price.
const TOTAL_CART_ITEMS = document.getElementById("total--cart--items");
const DISPLAY_CART_ITEM = document.getElementById("total--cart--items");
const TOTAL_PRICE = document.getElementById("total--price");

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
  decreaseQuantity(productId) {
    console.log(productId);
  }

  //   Remove Item
  removeCart() {
    console.log("remoce");
  }

  // Display CartItems
  displayCartItems() {
    let products = this.cartItems.map((item) => {
      return `
        <div class="product-card flex gap-10">
          <h2>${item.name}</h2>
          <h3>${item.price}</h3>
          <div>
            <button id=${item.id} class=" decrease--btn bg-red-500 rounded-md p-2 text-white">
              Derease btn
            </button>
            <p>${item.quantity}</p>
            <button class="bg-green-500 rounded-md p-2 text-white">
              Inrease btn
            </button>
          </div>
          <p>Item Total</p>
        </div>
        `;
    });

    DISPLAY_CART_ITEM.innerHTML = products.join(" ");

    // Get all btns for decrease
    const decreaseBTN = document.querySelectorAll(".decrease--btn");

    decreaseBTN.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.decreaseQuantity(e.target.getAttribute("id"));
      });
    });
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
