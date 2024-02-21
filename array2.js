//*Array Methods {important}

//* array length
//to get the length of the array
let arr = [11,33,55,45,66];
console.log(arr.length);// out put is 5

//* array toString 
let arr2 = [22,33,55,66,88];
let arrToStr= arr2.toString()
console.log(arrToStr);// out put is "22,33,55,66,88"


//* array pop();
//The pop() method removes the last element from an array and returns that element
let arr3 = ["car","bus","omini","jeep","truck"];
const popele = arr3.pop()
console.log(arr3); // modify original array
console.log(popele);// we get poped element


//* Array push():
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
let arr4 = ["knife","cooker","metal","basket"];
arr4.push("water");
console.log(arr4);// it modify original array, and provide a new array lenght 


//*Array shift():
//the shift() method is used remove the first elements in the array
let arr5 = ["road","flyover","railway","track","elevetor"];
const shiftele = arr5.shift();
console.log(arr5);// modify the original array 
console.log(shiftele);// to what it is removed from the original array



//*array unShift():
//the unShift() method is used to add one or more elements to the initial position of an arry
let arr6 = ["rose","jasmine","sunflower","orchid"];
arr6.unshift("butter","tomato");//modify the original array 
console.log(arr6);


//*Array concat();
//concat() method is used to merge two or more arrays, creating a new array with the combined elements.

let arr7 = ["butterfly","worm","spider","insect"];
let anotherArr = ["bee","ants","lizard"];

let newConcatArr = arr7.concat("reptiles",anotherArr,"bumble");// you can use multiple array and element when you concating
console.log(newConcatArr);// out put ['butterfly', 'worm', 'spider', 'insect', 'reptiles', 'bee', 'ants', 'lizard', 'bumble']


//*join(saperator)
//used to create a new string by concatenating all the elements of an array.
// You can specify a separator that separates each element in the resulting string

let arr8 = ["random","thinks","take","beyond","expectation"];
let joinarr = arr8.join("/");// here use "/" for saperating the elements 
console.log(joinarr);// our put is random/thinks/take/beyond/expectation



//*Array flat():
//used to create a new array with all the elements of the original array , specializedn to use nested array
//it break out nested in to plain array, change multi-dimension array to singel dimension-array

let arr9 = ["now",["where","when"],["how","why"],["good",["somehow","thinking"]]];

let newarr = arr9.flat()// you can mention number inside the flat or infity for breaking every nested to single dimension
console.log(newarr);//['now', 'where', 'when', 'how', 'why', 'good', Array(2)]



//*Array splice():
// splice() allows you to modify the contents of an array by adding or removing elements from a specified index,
// it used for array manipulation tasks, including adding elements, removing elements, or replacing elements,
// array.splice(start, deleteCount, item1, item2, ...);

 let arr10 = ["birds","fish","wild-Animals","horse","insects",];

    //*rmoving Element
         const remoele = arr10.splice(1,3);
         console.log(arr10);// out put ["birds","insects"], we get a modified original array
         console.log(remoele);// we get removed elements ["fish","wild-Animals","horse"]

    //*Adding Elements:
        arr10.splice(1,0,"wild-Animals","reptiles","giraff");
        console.log(arr10);// out put is ["birds","wild-Animals","reptiles","giraff","insects"]
        // add new elements before the index number you placed in first parameter
    
    //*Replacing Elements:
        const replace = arr10.splice(3,1,"domestic-animal"); // replace giraff to domestic-animals
        console.log(replace);// out put is girraf
        console.log(arr10);//out put is ['birds','wild-Animals','reptiles','domestic-animal','insects']
    
    

//*Array slice():
//used to extract a portion of an array and create a new array containing the selected elements.
//It doesn't modify the original array but returns a new array with the extracted elements
//The slice() method takes one or two arguments
//array.slice(begin, end);

let arr11 = ["computer","mouse","keybord","speaker","camera"];

        //*Extracting a Range:
        let newExtractedArray = arr11.slice(1,4); // the ending index value not count, before the value of that index will consider
        console.log(newExtractedArray);// out put is ["mouse","keybord","speaker"] ;


        //*Extracting from a Specific Index to the End:
        let specificIndextoTheEnd = arr11.slice(1);
        console.log(specificIndextoTheEnd); // out put  ['mouse', 'keybord', 'speaker', 'camera']


        //*Negative Indices:
        let negativeExtraction = arr11.slice(-4,-1);
        console.log(negativeExtraction);// out  put ['mouse', 'keybord', 'speaker']



        //*Copying an Array:
        let copyArray = arr11.slice();// help to copy the original array
        console.log(copyArray); // ["computer","mouse","keybord","speaker","camera"]






//* ok lets jump to iteratable array method in iteratable_array3.js