
let accounts = [[1,2,3],[3,9,1]]


   let a = 0
 
   for(let i = 0 ;i<accounts.length;i++){
        let b = 0
      for(let j= 0 ;j<accounts[i].length;j++){
         b += accounts[i][j]
      }if(b>a){
         a = b
      }
   }
   console.log(a);
   
 