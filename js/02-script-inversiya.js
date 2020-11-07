/* Пользователь вводит подряд 20 разных чисел(ввод осуществляется всех 
    чисел только в 1 переменную), нужно посчитать сколько было инверсий. 
    Пример:  5 2 5 3 6 4 8 9 2 4 1 6 8 5 4 7 9 7 1 5 = 9 инверсий, 
    к примеру 5 2 - это инверсия то есть то число которое стоит слева 
    больше того числа которое справа.  */

const primaryArr = [5, 2, 5, 3, 6, 4, 8, 9, 2, 4, 1, 6, 8, 5, 4, 7, 9, 7, 1, 5];
let count = 0;
    for (let i = 0; i < primaryArr.length; i += 1) {
        if (primaryArr[i] > primaryArr[i + 1]) { //это инверсия
            count += 1;
        }
    }
console.log(count);