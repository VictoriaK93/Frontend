const a = 17;
const b = 5;

console.log(a > b); // true (17 is greater than 5)
console.log(a <= b); // false (17 is not less than or equal to 5)
console.log(a == b); // false (17 is not equal to 5)
console.log(a != b); // true (17 is not equal to 5)

console.log('a' < 'b'); // true ('a' comes before 'b' lexicographically)
console.log('ab' > 'a'); // true ('ab' is lexicographically greater than 'a')

console.log('17' > 1); // true ('17' is implicitly converted to 17 and compared)

console.log(17 === 1); // false (strict comparison, different values)
console.log(17 === 17); // true (same value and type)
console.log(17 === '17'); // false (different types, strict equality)
console.log(17 === true); // false (different types)
console.log('0' === ''); // false (string comparison, different strings)
console.log(true === false); // false (different boolean values)
console.log(true === true); // true (same boolean value)
console.log(null === undefined); // false (different types, strict comparison)
console.log(false === 0); // false (different types)

console.log(17 == '17'); // true (loose equality, type coercion)
console.log('0' == ''); // false (different strings)
console.log(0 == ''); // true (loose equality, empty string is coerced to 0)
console.log(null == undefined); // true (loose equality, both are "falsy")
console.log(false == 0); // true (false is coerced to 0)

console.log(undefined == null); // true (loose equality, both are treated as "falsy")
console.log(undefined == 0); // false (undefined doesn't equal 0)
console.log(null == 0); // false (null doesn't equal 0)
console.log(undefined < 0); // false (undefined is not comparable to a number)
console.log(undefined > 0); // false (undefined is not comparable to a number)
