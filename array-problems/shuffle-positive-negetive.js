let array = [-1, 2, -3, 4, -5, 6, -7]

let neg = []
let post =[]
let result =[]

for(let i = 0;i<array.length;i++){
    // for(let j=0;j<array.length;j++){
        if(array[i]<0){
            neg.push(array[i])
        }else{
            post.push(array[i])
        }
    // }
}
for(let i = 0 ;i<post.length;i++){
    result.push(post[i],neg[i])
}

console.log(result);

