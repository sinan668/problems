let array = [1,2,3,4,2,4];
let count=0
let array1  = array
let result = []
for(let i = 0 ;i<array.length;i++){
    
    for(let j = i+1;j<array.length;j++){
        if(array[i] == array[j]){
            count++
        }
        
    }
    
    if(count <1){
        result.push(array[i])
    }
    count = 0;
}

console.log(result);