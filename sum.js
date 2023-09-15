"use strict";
//normal function
// function sum(a:number,b:number):number{
//     return a+b;
// }
// console.log(sum(5,4));
// anonymous function
// let s=function(a:number,b:number):number{
// return a+b;
// }
// console.log(s(1,2))
// arrow function
// b=sum(a:number,b:number):e=>{
//     return e.a+e.b
// }
// console.log()
// anonymous function
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------->positional argument
//  let p=function(c:number,d:number):number{
//  return c+d;
//  }
//  console.log(p(1,2))
//----------------------------------------->default argument
// let s=function(a:number,b=2):number{
//     return a+b;
//     }
//     console.log(s(1,5))
//--------------------------------------->optional argument
var q = function (e, f, g) {
    if (typeof g !== 'undefined') {
        return e + f + g;
    }
    return e + f;
};
console.log(q(5, 10));
