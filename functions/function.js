// function is a block of reuseble code to perform a task 



function abc(){

    console.log('this is a function');

}

abc()


// function with argument and parameeter


function def(a,b){
    return(a+b);
}

let num1 = 20
let num2 = 30

let ans = def(num1,num2)

console.log(ans);


// arrow function 



const ghi = (a,b)=>{

    return(a+b);

}

res = ghi(20,40)

console.log(res)


//scop


// 1- global scop 



let global = 20

function test1(){
    console.log(global);
}

test1()

function test2(){
    let fns = 30
    var gsp = 40
    const bsp = 50

}
console.log(fns) //this is not working 
console.log(gsp) //this is not working 
console.log(bsp) //this is not working 


test2()

