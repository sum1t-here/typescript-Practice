// any type

let age_: any;
let title;

age_ = 30;
age_ = false;

title = 25;
title = {
  hello: 'world',
};

// any type in  Arrays
let thing: any[] = ['hello', true, 30, null];
thing.push({ id: 123 });

// function & any
function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether('hello');
const resultTwo = addTogether(3);

// useful when migrating from js to ts
// using any won't cause errors initially
