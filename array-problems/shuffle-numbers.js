let nums = [2,5,1,3,4,7]

let shuf = []
let n =3

for(let j= 0 ; j<n;j++){
    shuf.push(nums[j])
    shuf.push(nums[j+n])
    return shuf
}

console.log(shuf);
