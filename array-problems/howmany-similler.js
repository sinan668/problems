let  nums = [8,1,2,2,3] 
let a = 0;
let result = []


for(let i = 0 ; i<nums.length;i++){
    for(let j= 0 ; j<nums.length;j++){
        if(nums[i]>nums[j] ){
            a++
        }
        
    }
    result.push(a)
    a=0
}
console.log(result);
