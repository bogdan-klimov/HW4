// //////////////////////////////////////1 +
arr = new Array(0);

for (let number = 5; number < 10; number++) {
    const randomNum = Math.round(Math.random() * 17);
    arr[number] = randomNum;
}

// console.log(arr);

const arr2 = arr.map(val => val * val);

// console.log(arr2);
// ///////////////////////////////////////2 +
arrNew = new Array(0);

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

for (let i = 0; i < 15; i++) { 
    const rand = randomInteger(-8, 20);
    arrNew[i] = rand;
}

// console.log(arrNew);

const resultArrNew = arrNew.filter(num => num < 0);

// console.log(resultArrNew);

// //////////////////////////////////3 +
arrayEvenNumber = new Array(0);

for (let num = 5; num < 21; num++) {
    const randNum = Math.round(Math.random() * 20)
    arrayEvenNumber[num] = randNum;
}

// console.log(arrayEvenNumber);

const resultArrayEvenNumber = arrayEvenNumber.filter(num => num%2 == 0); 

// console.log(resultArrayEvenNumber);

// /////////////////////////////////////4 +

arrFourTask = new Array(0);

for (let i = 0; i < 10; i++) { 
    const rand2 = randomInteger(-5, 5);
    arrFourTask[i] = rand2;
}

// console.log(arrFourTask);

const resultArrFourTask = arrFourTask.filter(num => num >= 0);

// console.log(resultArrFourTask);

const resultFourTask = resultArrFourTask.map(val => Math.sqrt(val));

// console.log(resultFourTask);


// ////////////////////////////////////5 +

array = [1, 2, 3, 2, 1];

const value = array.every(i => i > 0);

// console.log(value);

// //////////////////////////////////////6 +

const value2 = array.some(i => i < 0);

// console.log(value2);

// //////////////////////////////////////7 +

styles = ["Джаз", "Блюз"];

console.log(styles);

styles.push("Рок-н-ролл");

console.log(styles);

styles[(styles.length - 1 )/ 2 ] = "Классика";

console.log(styles);

styles.shift();

styles.unshift("Рэп", "Регги");

console.log(styles);





