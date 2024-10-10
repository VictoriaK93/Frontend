// Задание 1
let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
let min = arr[0], max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
}

console.log('Массив:', arr);
console.log('Минимум:', min);
console.log('Максимум:', max);


// Задание 2
let arr2 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'orange'];
let firstElement = arr2.shift(); // Удаляем первый элемент
arr2.push(firstElement); // Добавляем его в конец

console.log('Изменённый массив:', arr2);

// Задание 3
let arr3 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 75) + 1);
let min3 = arr3[0], max3 = arr3[0];

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] < min3) min3 = arr3[i];
    if (arr3[i] > max3) max3 = arr3[i];
}

console.log('Массив:', arr3);
console.log('Минимум:', min3);
console.log('Максимум:', max3);
console.log('Сумма минимума и максимума:', min3 + max3);


// Задание 4
let arr4 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
let sum4 = 0;

for (let num of arr4) {
    sum4 += num;
}

console.log('Массив:', arr4);
console.log('Сумма всех элементов:', sum4);

// Задание 5
let arr5 = [10, 20, 30, 40, 50];
let [a, b, c, d, e] = arr5;

console.log(a, b, c, d, e); // 10, 20, 30, 40, 50



// Задание 6
let str = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
let words = str.replace(/[^a-zA-Zа-яА-Я\s]/g, '').split(' ');

for (let word of words) {
    console.log(word);
}



// Задание 7
let arr7 = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr7.length - 1; i >= 0; i--) {
    reversedArr.push(arr7[i]);
}

console.log('Оригинальный массив:', arr7);
console.log('Перевёрнутый массив:', reversedArr);


// Задание 8
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

let testStr = "А роза упала на лапу Азора";
console.log(`"${testStr}" является палиндромом:`, isPalindrome(testStr));