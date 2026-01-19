

let  nums = [2,7,2,1,2,9]
let  unique=[]
let a = 0

for(let i =0;i<nums.length;i++){

    for(j=0;j<nums.length;j++){

        if (nums[i]==nums[j]) {
            a++
        }
        
    }

    // console.log(a)
    if(a<=1){

        unique.push(nums[i])

    }

    a=0

}
console.log(unique);
