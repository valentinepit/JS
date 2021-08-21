//Присвоить переменной а значение в промежутке [0..15]. 
//С помощью оператора switch организовать вывод чисел от a до 15

var a = 22;

function out(a) {
    if (a == 15) {
        console.log(15)
        return
    }
    console.log(a)
    return out(a + 1)
}

switch (a) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        out(a);
        break;
    default:
        console.log('Выберите другое число');
}