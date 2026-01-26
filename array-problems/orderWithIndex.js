let nums = [0,2,1,5,3,4]

//[0,1,2,4,5,4]

let ans = []

for(let i=0;i<nums.length;i++){
    for(let j=0 ;j<nums.length;j++){
        if(nums[i]==j){
            ans[i] = nums[j]
        }
    }
}

console.log(ans);


