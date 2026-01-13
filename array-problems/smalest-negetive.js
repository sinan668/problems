let array = [10, -8, 6, -4, 2, -5,-10,]

let smalest = 0

for(let i = 0;i<array.length;i++){
    if(array[i]<smalest){
        smalest=array[i]
    }
}
console.log(smalest);
