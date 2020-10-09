console.log("Ex.21");

const x = "John";
const y = "Doe";
console.log(x + " <> " + y);

console.log("----------------");

console.log("Ex.22");

let heyThatsMe = {
  Name: "Abdul Samad",
  Surname: "Mahmood",
  Email: "abdul_mahmood@hotmail.co.uk",
};
console.log(heyThatsMe);

console.log("----------------");

console.log("Ex.23");

delete heyThatsMe.Email;
console.log(heyThatsMe);

console.log("----------------");

console.log("Ex.24 & 25");

let genshin5Stars = [
  "Traveler",
  "Venti",
  "Xiao",
  "Qiqi",
  "Mona",
  "Keqing",
  "Diluc",
  "Klee",
  "Jean",
  "Blame Loris for this array, now I really want to play genshin :(",
];

console.log(genshin5Stars);

console.log("----------------");

console.log("Ex.26");

const randomNumber = function () {
  return Math.floor(Math.random() * 100) + 1;
};
let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(randomNumber());
}
console.log(randomArray);
console.log(randomArray.length);

console.log("----------------");

console.log("Ex.27");

let minValue = Math.min(...randomArray);
let maxValue = Math.max(...randomArray);
console.log(minValue);
console.log(maxValue);

console.log("----------------");

console.log("Ex.28");

const fusionHA = function (l) {
  let greaterArray = [];
  let lesserArray = [];

  for (let i = 0; i < l; i++) {
    for (let s = 0; s < 10; s++) {
      lesserArray.push(randomNumber());
    }
    console.log(lesserArray);
    greaterArray.push(lesserArray);
    lesserArray = [];
  }
};

console.log(fusionHA(2));

console.log("----------------");

console.log("Ex.29");

let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [9, 8, 7, 6, 5, 4];

const compareLength = function () {
  if (array1.length > array2.length) {
    console.log("array1 is longer");
    return array1;
  } else {
    console.log("array2 is longer");
    return array2;
  }
};

console.log(compareLength());

console.log("----------------");

console.log("Ex.30");

const compareSum = function () {
  let array1Sum = 0;
  for (let i = 0; i < array1.length; i++) {
    array1Sum = array1Sum + i;
  }
  let array2Sum = 0;
  for (let i = 0; i < array2.length; i++) {
    array2Sum = array2Sum + i;
  }
  if (array1Sum > array2Sum) {
    console.log("array 1 has the greater sum");
    return array1Sum;
  } else {
    console.log("array 2 has the greater sum");
    return array2Sum;
  }
};

console.log(compareSum());

console.log("----------------");
