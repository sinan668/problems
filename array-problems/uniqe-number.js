// // Find the unique numbers in an array


// one method

let arr=[1, 2, 3, 4, 5, 8, 8, 2, 1]

let unique =[]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            unique.push(arr[i])
        }
      }     
        
}
console.log(unique);

// secont method

let array=[1,3,4,5,5,6,3,2,4]

let unq=[]

for(let i=0;i<array.length;i++){
  let duu=false;
  for(let j=0;j<array.length;j++){
    if(i!==j&&array[i]===array[j])
      duu=true
  }
  if(!duu){
    unq.push (array[i])
  }
}
console.log(unq)