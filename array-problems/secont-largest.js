let array = [4,5,3,6,2,1,1]

let chehck = -Infinity
let secont = -Infinity


for(let i = 0 ;i< array.length;i++){
    if(array[i]>chehck){
        secont = chehck
        chehck  = array[i]
    }else if(array[i]>secont && array[i]<chehck){
        secont = array[i]
    }
}

console.log(chehck);
console.log(secont);


