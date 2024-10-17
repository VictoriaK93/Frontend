// Task 1

function arrayToObject(arr) {
    const result = {};
    arr.forEach(item => {
        result[item] = item;
    });
    return result;
}

console.log(arrayToObject(['a', 36.6, 'John Doe'])); 
// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }


// Task 2
function arrayOfPairsToObject(arr) {
    const result = {};
    arr.forEach(([key, value]) => {
        result[key] = value;
    });
    return result;
}

console.log(arrayOfPairsToObject([
  ['height', 170],
  ['weight', 80],
  ['sport', 'regbi'],
  ['full name', 'John Doe'],
  ['sing', 'love'],
  ['speed', 90]
]));
// { height: 170, weight: 80, sport: 'regbi', 'full name': 'John Doe', sing: 'love', speed: 90 }

// Task 3

function objectValuesToString(obj) {
    return Object.values(obj).join(', ');
}

console.log(objectValuesToString({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));
// 'a, 36.6, John Doe'


// Task 4

function objectWithTypes(obj) {
    const result = {};
    for (let key in obj) {
        result[key] = typeof obj[key];
    }
    return result;
}

console.log(objectWithTypes({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));
// { a: 'string', '36.6': 'number', 'John Doe': 'string' }


// Task 5

function objectWithValueAndType(obj) {
    const result = {};
    for (let key in obj) {
        result[key] = {
            value: obj[key],
            type: typeof obj[key]
        };
    }
    return result;
}

console.log(objectWithValueAndType({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));
// { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }

// Task 6

function calculateCost(bucket, products) {
    let total = 0;

    for (let item in bucket) {
        for (let warehouse in products) {
            if (products[warehouse][item]) {
                total += products[warehouse][item] * bucket[item];
            }
        }
    }

    return total;
}

const bucket = { display: 20, videocard: 100, cpu: 40 };
const products = {
    warehouse1: { videocard: 12.5 },
    warehouse2: { display: 56.2, cpu: 150 }
};

console.log(calculateCost(bucket, products)); // 8374


// Task 7

function compareObjects(firstObj, secondObj) {
    const firstKeys = Object.keys(firstObj);
    const secondKeys = Object.keys(secondObj);

    if (firstKeys.length !== secondKeys.length) return false;

    for (let key of firstKeys) {
        if (firstObj[key] !== secondObj[key]) return false;
    }

    return true;
}

const obj1 = { name: 'John', age: 17 };
const obj2 = { name: 'Mark', age: 17 };
const obj3 = { name: 'Mark', age: 17, student: false };
const obj4 = { name: 'John', age: 17 };

console.log(compareObjects(obj1, obj2)); // false
console.log(compareObjects(obj1, obj4)); // true



//Функция 1: Преобразует массив в объект, где ключ и значение одинаковы.
//Функция 2: Преобразует массив пар (ключ, значение) в объект.
//Функция 3: Превращает объект в строку с перечислением значений через запятую.
//Функция 4: Преобразует объект в новый объект, где значения — это типы исходных значений.
//Функция 5: Преобразует объект в новый объект, где каждое значение — это объект с исходным значением и его типом.
//Функция 6: Рассчитывает сумму товаров в корзине по количеству и цене из разных складов.
//Функция 7: Сравнивает два объекта на равенство по ключам и значениям.