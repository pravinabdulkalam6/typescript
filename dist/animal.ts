interface Animal{
    name:string;
    makesound():string;
}
class Dog implements Animal{
    name:string;
    constructor(){
        this.name="Dog"
    }
    makesound(): string {
        return (this.name+" barks")
    }
}
class Cat implements Animal{
    name: string;
    constructor(){
        this.name="Cat"
    }
    makesound(): string {
        return(this.name+" meows")
    }
}
let ob=new Dog();
let ob1=new Cat();
ob.makesound();
ob1.makesound();
console.log(ob.makesound())
console.log(ob1.makesound())