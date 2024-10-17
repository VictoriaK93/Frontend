const arrOfPeople = [
    { name: 'John', age: 12 },
    { name: 'Bred', age: 5 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 },
];


const updatedPeople = arrOfPeople.map(person => {
    return {
        ...person, // Копируем свойства объекта
        age: person.age + 1 // Увеличиваем возраст на 1
    };
});

console.log(updatedPeople);

const addAgeFunc = (human) => {
    const resultObj = {};
    resultObj.name = human.name;
    resultObj['age'] = human['age'] + 1;
    return resultObj;
}
const addAge = arrOfPeople.map(addAgeFunc);
console.log(addAge);

// spread
const sourceArray= [1, 2, 3];
const copyOfArray = [...sourceArray];

const sourceObj = { name: 'John', age: 12 };
const copyOfObj = {...sourceObj};



//FILTER
const arrayOfNumber = [18, 59, 1, 8, 17, 111];

// const filter18 = (num) => {
//   if (num >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const filter18 = (num) => num >= 18 ? true: false;

// const filter18 = num => num >= 18;

const arrayOfNumber18Plus = arrayOfNumber.filter(num => num >= 18);
console.log(arrayOfNumber18Plus);
// Классная работа 2
// const arrOfPeople = [
//     { name: 'John', age: 12 },
//     { name: 'Bred', age: 5 },
//     { name: 'Patrick', age: 20 },
//     { name: 'Cris', age: 40 },
//   ];
// С помощью функции filter вернем массив который содержит только элементы
// у которых age >=18

const arrfPeople = [
    { name: 'John', age: 12 },
    { name: 'Bred', age: 5 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 },
];

// Используем filter для отбора людей старше или равных 18 годам
const adults = arrOfPeople.filter(person => person.age >= 18);

console.log(adults);
