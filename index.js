//////////////////////////////////////1
arr = new Array(0);

for (let number = 5; number < 10; number++) {
    const randomNum = Math.round(Math.random() * 17);
    arr[number] = randomNum;
}

console.log(arr);

const arr2 = arr.map(val => val * val);

console.log(arr2);
///////////////////////////////////////2
arrNew = new Array(0);

for (let num = 0; num < 11; num++) {
    const rand = Math.round(Math.random() * -8)
    arrNew[num] = rand;
}

console.log(arrNew);
//////////////////////////////////3

arrayEvenNumber = new Array(0);

for (let num = 5; num < 21; num++) {
    const randNum = Math.round(Math.random() * 20)
    arrayEvenNumber[num] = randNum;
}

console.log(arrayEvenNumber);
/////////////////////////////////////4

////////////////////////////////////5

array = [1, 2, 3, 2, 1];

const value = array.every(i => i > 0);

console.log(value);

//////////////////////////////////////6

const value2 = array.some(i => i < 0);

console.log(value2)

//////////////////////////////////////7

styles = ["Джаз", "Блюз"];

console.log(styles);

styles.push("Рок-н-ролл");

console.log(styles);

// styles.fill( value="Классика");

// console.log(styles);

styles.shift();

styles.unshift("Рэп", "Регги");

console.log(styles);





