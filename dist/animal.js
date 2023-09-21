"use strict";
class Dog {
    constructor() {
        this.name = "Dog";
    }
    makesound() {
        return (this.name + " barks");
    }
}
class Cat {
    constructor() {
        this.name = "Cat";
    }
    makesound() {
        return (this.name + " meows");
    }
}
let ob = new Dog();
let ob1 = new Cat();
ob.makesound();
ob1.makesound();
console.log(ob.makesound());
console.log(ob1.makesound());
