const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Вырезаем первый элемент
const firstElement = b.shift();

// Добавляем его в конец
b.push(firstElement);

console.log(b);