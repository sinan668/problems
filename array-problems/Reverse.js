// how to find reverse of an array without using inbuilt function



let array = [1,2,3,4,5,6,7,8,9];
let temp = []

for(let i = 0 ; i <array.length/2; i++){
    temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;


}
console.log(array);
