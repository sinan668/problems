let nums = [3,2,2,3]
let val = 3


let result=[]
let ans = 0
for(let i = 0 ;i<nums.length;i++){
    if(nums[i] !== val){
        result.push(nums[i])
        ans++
    }
}



console.log(result,"and",ans);

