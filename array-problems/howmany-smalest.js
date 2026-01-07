let nums = [8,1,2,2,3]

let b = []
for(let i=0 ;i<nums.length;i++){
    let a = 0 
    for(let j=0;j<nums.length;j++){
        console.log(nums[i],nums[j]);
        
        if(nums[i]>nums[j]){
            a++
            
        }
    }
    b.push(a)
}
return b;

