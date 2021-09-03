const main = document.querySelector('.basket')

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
        this.money += product.price;
    }

}

const a = new Product('Boat', 25000);
const b = new Product('Engine', 20000);
const basket = new Basket();
//basket.add_product(a);
//basket.add_product(b);

function createItem(item) {
    const name = document.createElement('DIV');
    name.textContent = item.name;
    name.classList.add('basket_text')

    const price = document.createElement('DIV');
    price.textContent = item.price;
    price.classList.add('basket_text');

    const div = document.createElement('DIV')
    div.classList.add('basket_item');

    div.appendChild(name)
    div.appendChild(price)
    return div
}

size = Object.keys(basket).length;

console.log(Object.values(basket))

if (size == 0) {
    empty = document.createElement('SPAN');
    empty.textContent = 'Корзина пуста';
    main.appendChild(empty)
}
else {
    for (item of basket.products.values()) {
        main.appendChild(createItem(item))
    }
}

//console.log(basket)
