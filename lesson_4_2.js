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
        this.products.push(product.name);
        this.money += product.price;
    }

}

const a = new Product('boat', 25000);
const b = new Product('Engine', 20000);
const basket = new Basket();
basket.add_product(a);
basket.add_product(b);
console.log(basket)
