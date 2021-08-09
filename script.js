'use strict';
//1
// const obj = {
//     name: 'Lia',
//     age:20,
//     city: "Moscow",
//     hobby: {
//         hobby1: "Books",
//         hobby2: "Travel",
//         hobby3: "Art"
//     }
// };
//
// for(let key in obj){
//     console.log(` ${key} - ${obj[key]}`)
//     if(typeof obj[key] === 'object'){
//         for(let otherKey in obj[key]){
//             console.log(`${otherKey} - ${obj[key][otherKey]}`)
//         }
//     }
// }♥
//♥
//5
// const obj = {
//     name: 'Lia',
//     age:20,
//     city: "Moscow",
//     hobby: {
//         hobby1: "Books",
//         hobby2: "Travel",
//         hobby3: "Art"
//     }
// };
//
// let {name, age, city, hobby:{hobby1,hobby2,hobby3}} = obj;
// console.log(name, age, city,hobby1,hobby2,hobby3);
//♥
//3
// const arr =[14,12,31,55,71,23,4,11,];
//
// const arr2 = arr.map((elem) =>{
//     return elem +20
// });
// console.log(arr2);
//2
// let arrOfSomeElse = [['banana', 2, 3, false, 5], [6, 7, 8], ['56', 10]];
//
// let sum = 0;
//
// const task = () => {
//     for (let i = 0; i < arrOfSomeElse.length; i++){
//         console.log(`Текущий элемент главного массива [${arrOfSomeElse[i]}]`)
//             const arr = arrOfSomeElse[i];
//          for(let j = 0; j < arr.length; j++){
//           console.log(`Текущий элемент вложенного массива  ${arr[j]}`)
//              sum = sum + arr[j]
//         }
//     }
//     return sum
// }
// console.log(task())
//4
// function Note(mark, year, size,color, ssd,hdd,card, price, ) {
//     this.noteMark = mark;
//     this.noteSize = size;
//     this.noteCard = card;
//     this.noteColor = color;
//     this.notePrice = price;
//     this.noteSsd = ssd;
//     this.noteHdd = hdd;
//     let noteYear = year;
//     this.getMethod = function () {
//         if(noteYear > 2010){
//             console.log(this.notePrice)
//         }else {
//             console.log('Эта модель ниже 2010 года!')
//         }
//     }
//
// }
//
// const DELL = new Note('DELL', 2018, 4, 'green', 128, 2.5,'Intel',55);
// const Apple = new Note('Apple', 2020, 4, 'blue',128, 2.5,'Intel');
// const ASUS = new Note('ASUS', 2009, 4, 'white',128, 2.5,'Intel',77);
//
// DELL.getMethod();
// ASUS.getMethod();
//♥



