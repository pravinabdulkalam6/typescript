"use strict";
class Newclass {
    constructor() {
        this._val = "20";
    }
    get val1() {
        console.log("get");
        return this._val;
    }
    set val1(a1) {
        console.log("set");
        this._val = a1;
    }
}
//creaing new object for accessing class
let obj1 = new Newclass();
// console.log(obj1.val1);
obj1.val1 = "10";
console.log(obj1.val1);
