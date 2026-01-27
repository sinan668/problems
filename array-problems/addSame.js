let nums = [1,2,3]

let temp =[]

for(let i =0;i<nums.length;i++){
    temp.push(nums[i])
}

return [...temp,...nums]
