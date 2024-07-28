"use strict";
// const num = 1;
// let nme: any;
//! union
// let var_1: number | string = 1;
// console.log(var_1);
/*
//! interface
 /*
 //?create interface
interface employee {
  name: string;
  age: number;
  salary: number;
}
*/
/*

//! use interface

const employee1: employee = {
  name: "hars",
  age: 1,
  salary: 52000,
};

*/
//? tuple
// const user: [string, number] = ["name", 9];
// console.log(user);
//! enum
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
    Size["ExtraLarge"] = "XL";
    Size["ExtraLargeExtraLarge"] = "XXL";
    Size["ExtraLargeExtraLargeExtraLarge"] = "XXXl";
})(Size || (Size = {}));
const tShirtSize = Size.Medium;
console.log(tShirtSize);
