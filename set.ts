class Newclass {

    _val:string|number="20";
    get val1():string|number{
        console.log("get");
        return this._val;
    }
    set val1(a1:string|number){
        console.log("set");
        this._val=a1
    }
}
//creaing new object for accessing class
let obj1=new Newclass() ;
// console.log(obj1.val1);
obj1.val1="10";
console.log(obj1.val1)