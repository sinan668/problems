// non-primitive



/*

 1- object 

 2- array

 3- function


*/


// 1-Object

// object is used for store multipple value and key value in a variable

let sinan = {

    age:21,
    place:"edevennappara",
    gender:"male"

}

console.log(typeof(sinan));


//how to find key value

console.log(sinan.age)
console.log(sinan.place)
console.log(sinan.gender)




// 2-array 

// aray is used for store multtipple valu in single variable


let array = [12,34,56,78,98]


console.log(Array.isArray(array))

// how to find specific on

console.log(array[0]); // first index value
console.log(array[1]); // secend index value
console.log(array[2]); // therd  index value
console.log(array[3]);
console.log(array[4]);
console.log(array.length); // totel number



// 3- function


// a function is block of code and a set of reuseble code it perform a specific task


function  fnname (){

    console.log('this is a test of function');
    
}

fnname()

console.log(typeof(fnname))