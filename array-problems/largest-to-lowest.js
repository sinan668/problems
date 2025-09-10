// how to faint the largest to lowest number in an array without using sort function

let array = [6, 4, 3, 7, 2, 8, 1, 5];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array);


