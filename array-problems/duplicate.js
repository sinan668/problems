let array = [1,2,4,5,7,3,2,3];


let duplicate = [];

for(i=0; i <array.length ; i++){
    for(j=0; j<i;j++){
        if(array[i]===array[j]){
            duplicate.push(array[i])
        }
    }
}
console.log(duplicate); 