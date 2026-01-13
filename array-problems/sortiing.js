let array = [0, 1, 0, 1, 0, 1, 0];
let ready = []

for(let i = 0;i<array.length;i++){
    if(array[i]===0){
        ready.unshift(array[i])
    }else{
        ready.push(array[i])
    }
    
}
console.log(ready)

