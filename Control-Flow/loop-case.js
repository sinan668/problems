// loop are 3 type


// 1 - for loop 

// 2 - while loop

// 3 - do while loop

// 4 - for of

// 5 - for in





// 1 - for loop

let a = 5

for(let i= 0; i <= a ; i++){

    console.log('test for loop');

}


// 2 - while loop

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}



// 3 - do while loop



let b = 1;

do {
  console.log(b);
  b++;
} while (b <= 5);





// 4 - for of

let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}


// 5 - for in 

let user = {
  name: "Sinan",
  age: 22,
  city: "Kochi"
};

for (let key in user) {
  console.log(key, user[key]);
}


