//spread operator 

/*  The triple dots allow you to "spread" elements out of an array 
   or "collect" them into one.
*/

let array1 = [1,2,3];

let array2 = [4,5,6];

let a = [...array1,...array2]

console.log(a);


// rest operator


function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

sum(1, 2, 3);      // 6
sum(5, 10, 15);   // 30
