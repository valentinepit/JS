//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить 
//одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch)

var a = 4, b = 2, operation = 'sum';

function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function diff(a, b) {
    return a - b;
}

function dev(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            console.log(sum(arg1, arg2));
            break
        case 'diff':
            console.log(diff(arg1, arg2));
            break
        case 'mult':
            console.log(mult(arg1, arg2));
            break
        case 'dev':
            console.log(dev(arg1, arg2));
            break
        default:
            console.log('ВВедите правильный параметр')
    }
}

mathOperation(a, b, operation);
