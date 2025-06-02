let num = 12_314_121_121.551;
console.log(typeof num);

// number
console.log(10 * 10);
console.log(10 / 10);
console.log(10 - 10);
console.log(10 + 10);
console.log(10 / 0);
console.log(10 * "a");

// NaN not a number

// BigInt integer
let bigIntafs = 123456789012345678901234567890n;
console.log(typeof bigIntafs);

// string  - рядок/строка

let str = "Hello, world!";
console.log("Hello, world!");

let ticks = "One\n" + "lapky";
console.log(ticks);

let doubleTicks = "Double lapky";
let doubleTicks1 = "Double\nlapky";
let doubleTicks2 = `Double
lapky`;

console.log(doubleTicks2);
console.log(doubleTicks1);
console.log(doubleTicks1 === doubleTicks2);

console.log(String(doubleTicks1).length);
console.log(String(doubleTicks2).length);

console.log("double 12515215125125 1121251 Ticks");

// string templating
const name = "Pavlo";
console.log(typeof String("safsaf"));
console.log(typeof "safsaf");
console.log(doubleTicks === doubleTicks1);

let backTicks = `this is new
 code for testing`;

console.log(backTicks);

// boolean true/false
console.log(1 >= 2);

// symbol
let sym = Symbol("this is my symbol");
console.log(sym.toString());

// null undefined

// змінні
let boxWithFruties = "тут лежать дві цукерки";
console.log(boxWithFruties);

boxWithFruties = "тут лежить одна цукерка";
console.log(boxWithFruties);

boxWithFruties = null;
console.log(boxWithFruties);

let sumOfKandy = 10 + 10 - 2 * 2;
console.log(sumOfKandy);

let allVariable = `${boxWithFruties} ${sumOfKandy}`;
console.log(allVariable);

/*
= - присвоєння
== - порівнняння без урахування типу данних 
=== - порівнняння з урахування типу данних 
=>
<= 
!=
*/

const PI = 3.14;
const someObject = {
  key: "value asfasfa",
};
someObject["otheKey"] = "some value";
console.log(someObject);

// hoisting
// variable/змінна С
var someVar;

console.log(someVar);

var someVar = 12515;

sayHi();

function sayHi() {
  console.log("SayHi");
  var name1 = "test"; //
  let name2 = "test2";
  const name3 = "test3";
}

if (true) {
  var name1 = "test"; //
  let name2 = "test2";
  const name3 = "test3";
}

console.log(name1);
console.log(name2);
console.log(name3);

// область видимості
