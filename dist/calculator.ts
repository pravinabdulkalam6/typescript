let n1="12345"
let s=n1.split("")
console.log(s)
const stringArray = ["1", "2", "3", "4", "5"];

// Using the map function to convert the string elements to numbers
const numberArray = stringArray.map((str) => parseInt(str, 10));

// Using the reduce function to add the numbers
const sum1= numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum1); // This will output: 15
