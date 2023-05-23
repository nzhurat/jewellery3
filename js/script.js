let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.products');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let listCards = [];

openShopping.addEventListener('click', () => {
  document.body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
  document.body.classList.remove('active');
});

let products = {
  data: [
    {
      productName: "Gold earrings",
      category: "Gold",
      price: 400,
      image: "img/Gold earrings.png",
      description: "These gold earrings are perfect for a night out on the town."
    },
    {
      productName: "Gold necklace",
      category: "Gold",
      price: 450,
      image: "img/Gold necklace.png",
      description: "This stunning gold necklace is sure to turn heads."
    },
    {
      productName: "Silver earrings",
      category: "Silver",
      price: 420,
      image: "img/Silver earrings.png",
      description: "These silver earrings are simple yet elegant."
    },
    {
      productName: "Gold pearl earrings",
      category: "Gold",
      price: 300,
      image: "img/Gold pearl earrings.png",
      description: "These gold pearl earrings are a timeless classic."
    },
    {
      productName: "Silver pearl earrings",
      category: "Silver",
      price: 640,
      image: "img/Silver pearl earrings.png",
      description: "These silver pearl earrings are a statement piece."
    },
    {
      productName: "Gold rings",
      category: "Gold",
      price: 240,
      image: "img/Gold rings.png",
      description: "These gold rings are perfect for stacking."
    },
    {
      productName: "Silver necklace",
      category: "Silver",
      price: 500,
      image: "img/Silver necklace.png",
      description: "This silver necklace is a must-have accessory."
    },
    {
      productName: "Silver rings",
      category: "Silver",
      price: 410,
      image: "img/Silver rings.jpg",
      description: "These silver rings are perfect for everyday wear."
    }
  ]
};

(function createCard() {
  const cardsGrid = document.getElementById('products');
  if (!cardsGrid) {
    console.error("Could not find element with id 'products'");
    return;
  }
  const cardsHTML = products.data
    .map((item, key) => `
    <div class="container card ${item.category}">
      <div class="image-container">
        <img src="${item.image}">
      </div>
      <div class="container">
        <h5 class="product-name">${item.productName}</h5>
        <h5>${item.price}₴</h5>
        <p class="description">${item.description}</p>
        <button onclick="addToCart(${key})">Add To Cart</button>
      </div>
    </div>
  `)
    .join(' ');
  cardsGrid.innerHTML = cardsHTML;
})();

function filterProduct(value) 
{
  //Button class code
  let buttons = document.querySelectorAll('.button-value');
  buttons.forEach(button => {
    //check if value equals innerText
    if (value.toUpperCase() === button.textContent.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  //select all cards
  let elements = document.querySelectorAll('.card');
  //loop through all cards
  elements.forEach(element => {
    //display all cards on 'all' button click
    if (value === 'All') {
      element.classList.remove('hide');
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove('hide');
      } else {
        //hide other elements
        element.classList.add('hide');
      }
    }
  });
}
//Initially display all products
window.addEventListener('load', () => {
  filterProduct('All');
});
//Filter product on button click
let filterButtons = document.querySelectorAll('.button-value');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;
    filterProduct(value);
  });
});

function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = { ...products.data[key], quantity: 1 };
  } else {
    listCards[key].quantity++;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value != null) {
      const product = products.data[key];
      const itemPrice = Number(value.price);
      const itemImage = product.image;
      totalPrice += itemPrice * value.quantity;
      count += value.quantity;
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="${itemImage}"/></div>
        <div>${value.productName}</div>
        <div>${(itemPrice * value.quantity).toLocaleString()}₴</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString() + "₴";
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity <= 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}


