"use strict";
//-------------
// Union types
//-------------
let someId; // | is known as union
someId = 1;
someId = '2';
let email = null;
email = 'sumit@mern.dev';
email = null;
let anotherId;
anotherId = 'rqtwyefrdyt';
anotherId = 5;
//--------------------
// union type pitfall
//--------------------
function swapIdType(id) {
    // can only use props and methods common
    // to both number and string types
    // parseInt(id) --> not allowed
    if (typeof id == 'string') {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use number methods or properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType(`2`);
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
