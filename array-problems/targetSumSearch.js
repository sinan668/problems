let nums = [1,8,4,5]


let target = 6
let result = [];
for(let i = 0 ;i<nums.length;i++){
    for(let j=0 ; j<nums.length;j++){
 
        if(nums[i]+nums[j] == target && i!==j){
            result = [i,j]
        }
    }
}

console.log(result);
