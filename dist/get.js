"use strict";
class class1 {
    get() {
        return this.val;
    }
    set(b) {
        this.val = "done";
    }
}
let obj = new class1();
console.log(obj.val);
