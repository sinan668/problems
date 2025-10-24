// Fint mejorityElement in array


array = [1,2,3,2,2,4,5,2,6,3,2];

let mejorityElement = 0;

for(i = 0 ; i < array.length ; i++){
    if(array[i] == array[mejorityElement]){
        continue;
    }else{
        mejorityElement = i;
    }
}
console.log(array[mejorityElement]);