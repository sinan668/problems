let a = 10


let b = String(a)

let check1 = []
let check2 = []

let result = false
for(let i = 0;i<b.length;i++){
    check1.unshift(b[i])    
}
for(let i = 0;i<check1.length;i++){
    check2 += check1[i]
}
if(check2 == b){
    result = true
}

console.log(check2);

console.log(result)