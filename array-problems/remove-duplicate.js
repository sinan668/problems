let arr = [2, 4, 5, 2, 4, 6,7, 7];
let unique = [];
let found;

for (let i = 0; i < arr.length; i++) {
  found = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      found = true;
      break;
    }
  }
  if (!found) {
    unique[unique.length] = arr[i]; 
  }
}

console.log(unique);


