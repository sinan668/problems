let array = [2,5,7,8,0,4,0,0]
let temp1 = [];
let temp2 = [];
let ans;

for(let i = 0 ;i<array.length;i++){
    if(array[i]==0){
        temp1.push(array[i])
    }else{
        temp2.push(array[i])
    }
}

ans = [...temp1,...temp2]

console.log(ans);

