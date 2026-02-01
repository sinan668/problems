let arry = [4, 3, 4, 4, 6, 5, 6, 5, 5,3]


let odd=[]
let a ;
let ans=0


for(let i=0;i<arry.length;i++){
    if(arry[i]%2 !==0){
        odd.push(arry[i])
    }
}
// console.log(ans);
console.log(odd);


let b = 0 
for(let i = 0;i<odd.length;i++){
    for(let j = 0;j<odd.length;j++){
        if(odd[i]==odd[j]){
            b = odd[i]
        }
    }
}
console.log(b);

