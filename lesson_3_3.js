var basket = [1000, 2000, 3000, 4000]


// не работает выдает как конкатинацию строк почему-то
//function countBasketPrice(basket) {
//   return basket.reduce(function (acc, item) {
//        return acc + item
//   }, [])
//}

function countBasketPrice(basket) {
    let sum = 0;
    basket.forEach(function (item) {
        sum += item;
    });
    return sum;
}

console.log(countBasketPrice(basket))