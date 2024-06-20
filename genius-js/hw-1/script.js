// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
const value = 1;
// const value = 0;
// const value = -3;
if ( value > 0 ) {
    console.log('true');  
} else {
    console.log('folse');  
}


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true
const value2 = 'test';
// const value2 = 'qwerty';
// const value2 = true;
if ( value2 == "test" ) {
    console.log('true');  
} else {
    console.log('folse');  
}


// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
let value3 = 1;
// let value3 = 10;
// let value3 = 13;
if ( value3 > 10 ) {
    value3 = value3 -5;
} else if ( value3 < 10 ) {
    value3 = value3 + 5;
}
console.log(value3);  


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
const month = prompt('Введіть номер місяця від 1 до 12');
switch (Number(month)) {
    case 1: console.log('Січень'); break;
    case 2: console.log('Лютий'); break;
    case 3: console.log('Березень'); break;
    case 4: console.log('Квітень'); break;
    case 5: console.log('Травень'); break;
    case 6: console.log('Червень'); break;
    case 7: console.log('Липень'); break;
    case 8: console.log('Серпень'); break;
    case 9: console.log('Вересень'); break;
    case 10: console.log('Жовтень'); break;
    case 11: console.log('Листопад'); break;
    case 12: console.log('Грудень'); break;
    default: console.log('Ви ввели не коректне значення!');  
}


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
const number = prompt('Введіть тризначне число від 0 до 999');
if (number != null) {
    if (Number(number) >= 0 && Number(number) <= 999 && number.length == 3) {
        const num1 = Number(number[0]);
        const num2 = Number(number[1]);
        const num3 = Number(number[2]);
        const sum = num1 + num2 + num3;
        console.log('Сума чисел становить: ' + sum);
    } else {
        console.log('Ви ввели не коректне значення!');
    }
} else {
    console.log('Введіть дані!');
}

