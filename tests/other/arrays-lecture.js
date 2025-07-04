/*
object
7+1

Структури даних
Array/масив
*/

const arr = [0, 1, 2, 3, 4, 5, 6];
const arr0 = new Array(0, 1, 2, 3, 4, 5, 6);

const arr1 = new Array(7);

const arr2 = new Array();
const arr3 = [];

console.log(arr);
console.log(arr0);
console.log(arr1);
console.log(arr2);
console.log(arr3);

const student1 = "Liuda";
const student2 = "Vadym";
const student3 = "Oleksiy";
const student4 = "Kateryna";
const students = ["Liuda", "Vadym", "Oleksiy", "Kateryna"];

console.log(students);

// отримання елементу масиву
console.log(students[3]);
console.log(students.at(4));

// довжина масиву
console.log(students.length);

// перебирання масиву
for (let i = 0; i < students.length; i++) {
  students[i] = "Student: " + students[i];
  console.log(students[i]);
}

console.log(students);

const newLength = students.push("Student: Vasylisa");
console.log(newLength);
console.log(students);

const student5 = students.pop();
console.log(students);
console.log(student5);

// обʼєднання масивів
const cssSelectors = [".tag", '[atrib = "x"]'];
const xpath = ['//div[@class= "ram"]', '//*[text() = "afsfa"]'];
const locators = cssSelectors.concat(xpath);

console.log(locators);

// for(...of)
const items = ["iphone", "ipad", "e-book"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

for (const item of items) {
  console.log(item);
}
items.forEach((item, index) => {
  const itemi = item + `index: ${index}`;
  console.log(itemi);
});

//forEach
const newItems0 = items.forEach((item, index, arr) => {
  arr[index] = arr[index] + ` index: ${index}`;
});
console.log(newItems0);
console.log(items);

//map
const newItems = items.map((value, index, arr) => value + 1);
console.log(newItems);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.map((value) => {if(value % 2 === 0) return value});

//filter
const filteredNumbers = numbers.filter((value) => value % 2 === 0);
console.log(filteredNumbers);

//includes
const people = ["Liuda", "Vadym", "Oleksiy", "Kateryna"];
const result = people.includes("Pavlo");
console.log(result);

//find
const dates = [16, 16, 19, 18];
const strings = ["16", "16", "19", "18"];

//reduce
const res = strings.reduce((prev, current, index) => {
  console.log(index);
  console.log(prev);
  console.log(current);

  console.log(prev + current);
  return prev + current;
}, "");

console.log(res);

const dresult = dates.find((value, index, arr) => {
  console.log(index);
  return value >= 17;
});

console.log(dresult);

// const item = 'iphone';
// const item = 'ipad';
const item = "e-book";

const random = ["asfa", true, null, undefined, NaN, [], {}, 1215];
