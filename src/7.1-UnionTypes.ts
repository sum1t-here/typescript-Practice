//-------------
// Union types
//-------------

let someId: number | string; // | is known as union

someId = 1;
someId = '2';

let email: string | null = null;

email = 'sumit@mern.dev';
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = 'rqtwyefrdyt';
anotherId = 5;

//--------------------
// union type pitfall
//--------------------

function swapIdType(id: Id) {
  // can only use props and methods common
  // to both number and string types
  // parseInt(id) --> not allowed

  if (typeof id == 'string') {
    // can use string methods
    return parseInt(id);
  } else {
    // can use number methods or properties
    return id.toString();
  }
}

const idOne = swapIdType(1);
const idTwo = swapIdType(`2`);

console.log(idOne, idTwo);
// 1 2 (white: string, yellow: number)

//------------------
// taged interfaces
//------------------

interface user {
  type: 'user'; // hard coded type
  username: string;
  email: string;
  id: Id;
}

interface Person {
  type: 'person';
  firstname: string;
  age: number;
  id: Id;
}

function logDetails(value: user | Person): void {
  if (value.type === 'user') {
    console.log(value.email, value.username);
  }
  if (value.type === 'person') {
    console.log(value.firstname, value.age);
  }
}
