let names: string[] = ['Mario', 'Luigi', 'Peach'];
// array of strings only

let ages: number[] = [25, 28, 32];
// arrays of numbers only

names.push('bowser');
// ages.push('34')
// Argument of type 'string' is not assignable to parameter of type 'number'

// type interference with arrays

let fruits = ['apples', 'pears', 'banana', 'mango'];

// fruits.push(true);
// Argument of type 'boolean' is not assignable to parameter of type 'string'

let things = [1, true, 'hello'];
// let things: (string | number | boolean)[] : hover result

// object literals

let user: {
  firstName: string;
  age: number;
  id: number;
} = { firstName: 'mario', age: 30, id: 1 };

user.firstName = 'peach';
user.id = 1;

console.log(user); // { firstName: 'peach', age: 30, id: 1 }

// type interference with object literals

let person = {
  name: 'luigi',
  score: 35,
};

person.name = 'bowser';
// person.score = '2'  cannot do this as type is not same
// person.id = 3
// Property 'id' does not exist on type '{ name: string; score: number; }'

const score = person.score;
console.log(score); // 35
console.log(typeof score); // number
