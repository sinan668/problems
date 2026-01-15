let word1 = ["abc", "d", "defg"]
let word2 = ["abcddefg"]

let ans1 = []
let ans2 = []
let result = false
for(let i = 0 ;i<word1.length;i++){
    
    ans1 += word1[i]

}

for(let i = 0 ;i<word2.length;i++){

    ans2 += word2[i]
}
if(ans1==ans2){
    result = true
}

console.log(true);
