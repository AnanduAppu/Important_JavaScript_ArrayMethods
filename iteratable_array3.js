//*any iteratable array method wont modify the origiinal array
//* all iteratable arryay method accept three parameters (reduce only which accept 4 parameters)

//*The forEach()
//iterable array method used to iterate through the elements of an array and apply a provided function to each element
//operation happens on each element of an array without creating a new array.
//The forEach() method does not return a new array
//syntax:- array.forEach(callback(currentValue, index, array));

let arr1 = [1,2,3,4,5,6,7,8]
arr1.forEach((ele,index,array)=>{
   //console.log(ele*2); //2,4,6,8,10,12,14,16
   //console.log(index);//0.1,2,3,4,5,6,7
   console.log(array);// array itself print in range of its length
})
//forEach() method in JavaScript is a standalone method that can be called on an array



//*map() method 
//used to create a new array by applying a provided function to each element of an existing array
// It returns a new array with the results of applying the function to each element.
//Map method wont modify original array

const arr2 = [1,2,3,4,5,6,7,8];
const returnArr = arr2.map(ele=>ele*2);
console.log(returnArr);//[2, 4, 6, 8, 10, 12, 14, 16]



//*filter()
//The filter() method creates a new array containing all elements that satisfy a provided condition
//It returns a new array with the filtered elements
const arr3 = ["car","bus","van","car","aeroplan","JCB","car","motorcycle"];
const filterarr = arr3.filter((ele)=>{ return ele!=="car"});// iam here replace "car" elements from array
console.log(filterarr);// out put ['bus', 'van', 'aeroplan', 'JCB', 'motorcycle']




//*Reduce()
//method iterates through the array and accumulates the values by applying a function
// reduce method alway return a single value which is total of entire array
//const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
//accumulator: The accumulated result, initially set to the initialValue (or the first element of the array if initialValue is not provided).
//initialValue (optional): A value that is used as the initial value for the accumulator. If not provided, the first element of the array is used.

let arr4 = [10,20,30,40,50,60,70,80,90,100];
let singleVal = arr4.reduce((acu,ele)=>{
    return acu + ele;
  },0);
console.log(singleVal);




//*some()
//iterable array method in JavaScript used to check if at least one element in an array satisfies a specified condition
// it retutn a boolean value

    let arr5 = [2,4,5,14,13,6,10];
    let checkSome = arr5.some((ele)=> ele/2===0);
    console.log(checkSome);



//*sort();
// sort() method is used to ordering array in both ascending and descending 
const arr6 = [3,2,7,4,9,1,5];
  //*ascending order
    
    const ascending = arr6.sort((a,b)=>a-b);//a-b is for ascending the array elements
    console.log(ascending);// [1, 2, 3, 4, 5, 7, 9]

  //* descending order
    const descending = arr6.sort((a,b)=>b-a)//b-a is for decending the array elements
    console.log(descending);//[9, 7, 5, 4, 3, 2, 1]