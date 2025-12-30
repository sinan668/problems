let  sentences = ["alice and bob love leetcode","i think so too", "this is great thanks very much"]

let array = []
for(let i = 0;i<sentences.length;i++){
    array[i] = sentences[i].length
    let abc = 0;
    for(let j=0 ; j<array.length;j++){
        
        if(array[j]>  array[abc]){
           abc= j 
        }
        console.log(array[abc]);
        
        
    }
    
    
}
