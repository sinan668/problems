let n = 234



let mult = 1
let sum = 0
let a = String(n)
let array = a.split("")
for(let i = 0 ; i<array.length;i++){
    mult = mult* array[i]
}
for (let i of a) {
   sum += Number(i);
}


console.log(mult-sum);



