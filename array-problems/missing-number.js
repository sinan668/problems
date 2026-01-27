let array = [0,1,2,3,5,7,8,9]

let ans = []

let a =0

for(let i = 0 ;i<10;i++){

    for(let j = 0 ;j<array.length;j++){
        if(i !== array[j]){
            a++
        }
        
        
    }

    
    if(a ==array.length){
         ans.push(i)
    }
    a=0

}


console.log(ans);