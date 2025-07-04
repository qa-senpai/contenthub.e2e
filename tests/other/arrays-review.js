/*
✏️ Напиши функцію, яка перевіряє, чи є input масивом.  
Тестові дані:  
console.log(isArray('QA DOJO')); // false  
console.log(isArray([1, 2, 4, 0])); // true
*/

console.log(Array.isArray([1, 2, 3, 4]));

[1, 2, 3, 4, 5].map((value, index, arr) => {
  console.log(value);
  console.log(index);
  console.log(arr);
});

function isArray(arr) {
  try {
    arr.map((e) => e);
  } catch (error) {
    return "1214" + error;
  }

  return true;
}

console.log(isArray());
console.log(isArray([]));

Array;
Object;
String;
Number;
Boolean;

/*
2️⃣ Клонування масиву  
✏️ Напиши функцію для створення копії масиву.  
Тестові дані:  
console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]  
console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

arr2.push(150);

function cloneArray(arr) {
  return [].concat(arr);
}

function cloneArray1(arr) {
  return arr.concat();
}

function cloneArray2(arr) {
  return arr.map((value) => value);
}

function cloneArray3(arr) {
  const clone = [];

  for (let i = 0; i < arr.length; i++) {
    clone.push(arr[i]);
  }

  return clone;
}

function cloneArray4(arr) {
  const clone = [...arr];

  return clone;
}

function cloneArray5(arr) {
  const clone = arr.slice(0);

  return clone;
}

const arrWithObject = ["safa", 12, { a: 10, b: 10 }];
const newArrWithObject = cloneArray5(arrWithObject);

console.log(arrWithObject);
console.log(newArrWithObject);

arrWithObject[2].a = 500;
arrWithObject[1] = 200;

console.log(arrWithObject);
console.log(newArrWithObject);

const newArr = cloneArray(arr1);

arr1.push(6);
console.log(newArr);
console.log(arr1);

console.log(newArr);

/*
3️⃣ Перші елементи масиву  
✏️ Напиши функцію для отримання перших n елементів масиву.  
Тестові дані:  
console.log(first([7, 9, 0, -2])); // 7  
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]
*/

function first(arr, numberOfElements = 1) {
  return arr.slice(0, numberOfElements);
}

console.log(first([12415, 2, 3, 4, 5], 5));

/*
4️⃣ Останні елементи масиву  
✏️ Напиши функцію для отримання останніх n елементів масиву.  
Тестові дані:  
console.log(last([7, 9, 0, -2])); // -2  
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]
*/

function last(arr, numberOfElements = 1) {
  return arr.slice(-numberOfElements);
}

console.log(last([12415, 2, 3, 4, 5], 3));
const arrNum = [12415, 2, 3, 4, 5];
/*
5️⃣ Об’єднання елементів масиву  
✏️ Напиши програму, що об'єднує елементи масиву у строку.   (гугліть як це зробити)
Приклад:  
myColor = ["Red", "Green", "White", "Black"];  
// "Red,Green,White,Black"  
// "Red+Green+White+Black"
*/

function join(arr, separator) {
  return arr.join(separator);
}

console.log(join(arrNum, ","));

/*
6️⃣ Дефіси між парними числами   
✏️ Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
Приклад:  
Ввід: "025468"  
Вивід: 0-254-6-8
*/

("025468");

console.log(0 % 0);

function addDash(str) {
  if (typeof str === "string") {
    let output = "";
    // const arr = Array.from(str);

    for (let i = 0; i < str.length; i++) {
      if (parseInt(str[i]) % 2 === 0 && parseInt(str[i - 1]) % 2 === 0) {
        console.log(str[i]);
        output += "-" + str[i];
      } else {
        console.log(str[i]);
        output += str[i];
      }
    }
    return output;
  } else {
    throw Error("Expected string argument");
  }
}

console.log(addDash("025468"));

/*
7️⃣ Сортування масиву  
✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
Приклад:  
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];  
Вивід: -4,-3,1,2,3,5,6,7,8
*/

function sort(arr) {
  if (Array.isArray(arr)) {
    return arr.sort((a, b) => a - b);
  } else {
    throw Error("Pls provide Array argument to the function");
  }
}

console.log(sort([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

/*
Краще якусь іншу. 
Типа є число  і треба відсортувати цифри так, щоб ті, які парні, лишились на своєму місці, а решту відсортувати по зростанню. результат 

256874134779
216834574779
*/

function sortByPairNumber(num) {
  const arr = num.toString().split("").map(Number);
  const sortedNotPairedNumbers = arr
    .filter((value) => value % 2 != 0)
    .sort((a, b) => a - b);
  let o = 0;

  const pairedNumbers = arr.map((value) => {
    if (value % 2 === 0) {
      return value;
    } else {
      const sorted = sortedNotPairedNumbers[o];
      o = o + 1;
      return sorted;
    }
  });

  return parseInt(pairedNumbers.join(""));
}

console.log(sortByPairNumber(256874134779));

256874134779;
216834574779;
