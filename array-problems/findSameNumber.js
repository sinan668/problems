let order = [3,1,2,5,4]
let friends = [1,3,4]

let array = [...order,...friends]
let result =[]

for(let i =0 ;i<array.length;i++){
    for(let j = i+1;j<array.length;j++){
        if(array[i]==array[j]){
            result.push(array[i])
        }
    }
    
    
}
return result;
