var n1 = "12345";
var s = n1.split("");
console.log(s);
var stringArray = ["1", "2", "3", "4", "5"];
// Using the map function to convert the string elements to numbers
var numberArray = stringArray.map(function (str) { return parseInt(str, 10); });
// Using the reduce function to add the numbers
var sum1 = numberArray.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(sum1); // This will output: 15
