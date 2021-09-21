class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Basket {
    constructor() {
        this.products = [];
        this.money = 0;
    }

    add_product(product) {
        this.products.push(product);
        this.money = parseInt(this.money) + parseInt(product.price);
    }

}

const basket = new Basket();

let products = document.getElementsByClassName("product");
const basket_show = document.getElementsByClassName("basket")[0];

function addProduct(e) {
    item = this
    n = item.getElementsByClassName("name")[0].innerText;
    p = item.getElementsByClassName("price")[0].innerText;
    prod = new Product(n, p);
    basket.add_product(prod);
    const li = document.createElement("LI");
    li.classList.add("product");
    let name = document.createElement("DIV");
    name.innerText = n;
    let price = document.createElement("DIV");
    price.innerText = p;
    li.appendChild(name);
    li.appendChild(price);
    basket_show.appendChild(li);
    size = Object.keys(basket).length;
    basket_value = basket["money"];

    console.log(basket);
    document.getElementsByClassName("summ")[0].innerText = basket_value;
}

for (var i = 0; i < products.length; i++) {
    products[i].onclick = addProduct;
}

