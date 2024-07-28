// let a = 2;

// a = 3;

//!  this is wroking type
//? number
//? string
//? boolean
//? any
//? null
//? undefined

//! Additional Types for Typescript
//? any
//? unknown
//?  never
//? enum
//? tuple

// const with_optional_org = (name?: string): void => {
//   let greet: string;
//   if (!name) {
//     greet = `Hello ${name}`;
//   } else {
//     greet = "Hello User";
//   }
// };

// console.log(with_optional_org("haris"));

//! Object Interface Create

interface ObjTypes {
  name: string;
  id: number;
  age: number;
  verified: boolean;
  phone?: string;
}

//! Use Interface this type

{
  /* 
  ?const obj: ObjTypes = {
  ?name: "haris",
  ?id: 1,
  ?age: 22,
  ?verified: true,
}; */
}

// const arr: (number | string)[] = [1, "1", 2, "2"];

// arr.push("true");

// console.log(arr);

const num: string = "2";
