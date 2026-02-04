let hours = [0,1,2,3,4]
let target = 2

ans = 0
for(let i = 0 ; i<hours.length;i++){
    if(hours[i]>=target){
        ans++
    }
}
console.log(ans)
