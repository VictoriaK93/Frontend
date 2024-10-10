//Task1

function isEvenOrOdd(num) {
    num = Math.floor(num); // Скругляем число вниз до целого
    return num % 2 === 0 ? 'even' : 'odd'; // Возвращаем 'even', если число четное, иначе 'odd'
}

console.log(isEvenOrOdd(5.9)); // 'odd'
console.log(isEvenOrOdd(10.1)); // 'even'


//Task2
const squareNumber = (num) => {
    num = Math.floor(num); // Скругляем число вниз до целого
    return num * num; // Возвращаем квадрат числа
}

console.log(squareNumber(4.7)); // 16
console.log(squareNumber(5.3)); // 25



//Task3
function sumEvenNumbersInRange(start, end) {
    start = Math.floor(start); // Скругляем начало вниз
    end = Math.floor(end); // Скругляем конец вниз
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i; // Если число четное, добавляем его к сумме
        }
    }

    return sum; // Возвращаем сумму четных чисел
}

console.log(sumEvenNumbersInRange(3.5, 10.8)); // 24 (4 + 6 + 8 + 10)
console.log(sumEvenNumbersInRange(1, 7)); // 12 (2 + 4 + 6)


//Task4

// First funtion

function isPrime(num) {
    if (num < 2) return false; // Числа меньше 2 не являются простыми
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Если найден делитель, то число не простое
    }
    return true; // Если делителей нет, число простое
}


//Second funktion
function getPrimesInRange(n) {
    let primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i); // Если число простое, добавляем его в массив
        }
    }

    return primes; // Возвращаем массив простых чисел
}

console.log(getPrimesInRange(10)); // [2, 3, 5, 7]
console.log(getPrimesInRange(20)); // [2, 3, 5, 7, 11, 13, 17, 19]