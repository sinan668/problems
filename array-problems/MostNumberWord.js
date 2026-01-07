
let  sentences =["w jrpihe zsyqn l dxchifbxlasaehj","nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom","xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg","krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm","rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr","o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk","hrvh efqvjilibdqxjlpmanmogiossjyxepotezo","qstd zui nbbohtuk","qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc"]

let array = []


for(let i = 0; i<sentences.length;i++){
    
let a =0

    for(let j = 0;j<sentences[i].length ;j++){

     const sent = sentences[i][j];
          
        if(sent == ' '){ 

            a++

        }
        
    }

    array.push(a)

}
console.log(array);

let  element =0
for(let i = 0 ; i<array.length;i++){
    for (let j = 0; j < array.length; j++) {
         if(array[i]>=array[j] && array[i]>=element){
            element = array[i]
        }
    }
}
console.log(element);

