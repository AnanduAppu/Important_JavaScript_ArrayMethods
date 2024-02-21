//*ARRAYS
//an array is a data structure that allows you to store and manage a collection of values
//Arrays are used to group related data elements together and are one of the most commonly used data structures in the language
//arrays can hold values of different data types, including numbers, strings, objects, and even other arrays

//array declaration
let fruits = ["apple","orange","grapes","mango"];
let arrayNum = new Array(1,2,3,4,5,6);
console.log(fruits);// out put is "["apple","orange","grapes","mango"]"
console.log(arrayNum);// out put is "[1,2,3,4,5,6]"


//Accessing Element
let places = ['manjeri','kochi','calicut','trivandrum'];
console.log(places[0]);// out put is manjeri
console.log(places[3]);// out put is trivandrum

//Length 
let Numberarr = [1,2,3,4,5,6,7];
console.log(Numberarr.length);// out put is 7


// Modifing elements
let evenNum = [2,4,6,8,10];
evenNum[2] = 2; // it change 6 to 2 
console.log(evenNum);


//Iterating through Arrays:

for (const fruit of fruits) {
    console.log(fruit);
}


//Multidimensional Arrays:
//create multidimensional arrays, which are arrays within arrays
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix);


// let jump to array method in array2.js, reffer it 