let array = [8, -6, 4, -2, 5,-10]
let smalest = Infinity;



for(let i=0 ;i<array.length;i++){
     if(array[i]<smalest  && array[i]>0 ){
        smalest=array[i]
        
     }
}

console.log(smalest);