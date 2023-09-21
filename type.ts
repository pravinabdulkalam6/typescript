// let A:number=2
// console.log(A)
// let A=3+100
// console.log(A)
// let age:number|string;
// age='26';
// console.log(age);
// age=26;
// console.log(age);
// let a=100+'pravin';
// console.log(a)
// let a:number[]=[];
// a.push(1,2,3);
// console.log(a)
// let b:(number|string)[]=[];
// b.push(1,2,3,"pravin")
// console.log(b)
let c:{
    name:string,
    age:number;
}[]=[{name:"pravin",age:21},{name:"abdul",age:20}]
c.forEach(e=>{
    if(e.age==21)
    {
        console.log(e.name)
    }
})
// let a:{name:string,age:number}[]=[{name:"pravin",age:21},{name:"ak",age:25}]
// let c=a.map(e=> {
//     if(e.age==25)
//     {
//         return e;
//     }
// }).filter(e=>e);
// console.log(c)
// let person:(number|string)[]=[1,2,3,"pravin"]
// console.log(person)
let a:any;
a=1;
a="pravin";
a=[1,2,3]
let b:number;
b=a;

