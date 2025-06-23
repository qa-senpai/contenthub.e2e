// однопоточною мовою програмування

// event loop

// const promiseRace = Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve("done"), 5000)),
//   new Promise((resolve) => setTimeout(() => resolve("done2"), 10_000)),
//   new Promise((resolve) => setTimeout(() => resolve("done3"), 3000)),
// ]);

// promiseRace.then((value) => console.log(value));

const promise = new Promise((resolve, reject) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    if (isSuccess === true) {
      resolve("Операція успішна!");
    } else {
      reject("Це провал!");
    }
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    if (isSuccess === true) {
      resolve("Операція успішна 2 !");
    } else {
      reject("Це провал2 !");
    }
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    if (isSuccess === true) {
      resolve("Операція успішна 3 !");
    } else {
      reject("Це провал 3 !");
    }
  }, 1000);
});

const promiseAny = Promise.any([promise, promise2, promise3]);

promiseAny.then((value) => console.log(value));

// // проміс нічого не поветає
// const result = promise
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));
