// Coersion - преобразование данных из одного типа в другой

const a = "abc"; // string
const b = "145"; // string
console.log(typeof b);
const z = 145; // number
const b2 = "";// string (значение пустая строка)
const c = undefined;
const d = null;
const f = true;
const e = false;

// преобразование в число
console.log("==========")
const bToNumber = Number(b);
console.log(bToNumber);
console.log(typeof bToNumber);

const aToNumber = Number(a);
console.log(aToNumber);
console.log(typeof aToNumber);

console.log(Number(b2)); // 0 / NaN
console.log(Number(c)); // 0 / NaN
console.log(Number(d)); // 0 / NaN
console.log(Number(f)); 
console.log(Number(e));
