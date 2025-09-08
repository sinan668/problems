// Find the largest number in an array
// Find the Smalest number in an array


let array = [1,4,5,2,6,3];

let largest = 0;
let smalest = 0;


for(i = 0 ; i <array.length; i++){
    if(array[i]>array[largest]){
        largest = i
    }else if (array[i]<array[smalest]){
       smalest = i 
    }
}
console.log(array[largest]);

console.log(array[smalest]);
