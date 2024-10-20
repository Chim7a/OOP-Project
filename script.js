// Create an object class to store the product to store id, name amd price.
const TOTAL_CART_ITEMS = document.getElementById("total--cart--items");
const DISPLAY_CART_ITEM = document.getElementById("display--cart--items");
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
    return this.price * this.quantity;
  }
}

// *********

// Create another object class for the shopping cart which contains an array of shoppingCartItems
class ShoppingCartItems {
  constructor(cartItems) {
    this.cartItems = cartItems;
  }

  //   Get numbers of items in cart
  getNumbersOfItemsInCart() {
    TOTAL_CART_ITEMS.innerText = `Items: ${this.cartItems.length}`;
  }

  //   Increase quantity
  increaseQuantity(productId) {
    this.cartItems.forEach((item) => {
      if (item.id === productId) {
        item.quantity += 1;
      }
      this.displayCartItems();
      this.getTotalOfItemsInCart();
    });
  }

  //   Decrease quantity
  decreaseQuantity(productId) {
    this.cartItems.forEach((item) => {
      if (item.id === productId && item.quantity > 1) {
        item.quantity -= 1;
      }
      this.displayCartItems();
      this.getTotalOfItemsInCart();
    });
  }

  //   Remove Item
  deleteCart(productId) {
    let updatedCartItem = this.cartItems.filter(
      (item) => item.id !== productId
    );
    this.cartItems = updatedCartItem;
    this.displayCartItems();
    this.getNumbersOfItemsInCart();
    this.getTotalOfItemsInCart();
  }

  // Display CartItems
  displayCartItems() {
    let products = this.cartItems.map((item) => {
      return `
         <div class="product-card flex items-center font-semibold gap-10">
          <h2>${item.name}</h2>
          <h3>${item.price}</h3>
          <div class="text-center">
            <button
              id="${item.id}"
              class="decrease--btn bg-red-500 rounded-md p-2 text-white"
            >
              -
            </button>
            <p>${item.quantity}</p>
            <button
              id="${item.id}"
              class="increase--btn bg-green-500 rounded-md p-2 text-white"
            >
              +
            </button>
          </div>
          <div>
            <p>${item.getProductTotal()}</p>
            <button
              id="${item.id}"
              class="delete--btn bg-purple-500 rounded-md p-2 text-white"
            >
              Delete
            </button>
          </div>
        </div>
        `;
    });

    DISPLAY_CART_ITEM.innerHTML = products.join(" ");

    // Get all btns for decrease
    const decreaseBTN = document.querySelectorAll(".decrease--btn");
    const increaseBTN = document.querySelectorAll(".increase--btn");
    const deleteBTN = document.querySelectorAll(".delete--btn");

    decreaseBTN.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.decreaseQuantity(parseInt(e.target.getAttribute("id")));
      });
    });

    increaseBTN.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.increaseQuantity(parseInt(e.target.getAttribute("id")));
      });
    });
    deleteBTN.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.deleteCart(parseInt(e.target.getAttribute("id")));
      });
    });
  }

  //   Get total of items
  getTotalOfItemsInCart() {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    TOTAL_PRICE.innerText = `Total: ${total}`;
  }
}

// Cart items

let cartItems = [
  new ProductInfo(1, "Iphone 16", 1000, 1),
  new ProductInfo(2, "Television", 5000, 1),
  new ProductInfo(3, "Pink rose", 3400, 1),
];

// Create a new instance of shopping Cart

const ShoppingCart = new ShoppingCartItems(cartItems);

// Display all cart items
ShoppingCart.displayCartItems();
ShoppingCart.getTotalOfItemsInCart();
ShoppingCart.getNumbersOfItemsInCart();
