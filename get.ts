class class1 {
    val!:string;
    get():string{
        return this.val;
    }
    set(b:string){
        this.val="done";
    }
}
let obj=new class1();
console.log(obj.val)
