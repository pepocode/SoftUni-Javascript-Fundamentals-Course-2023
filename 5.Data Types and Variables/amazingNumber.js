function solve(num) {

    // num = num.toString();
    // let sum = 0;
    // for(let i = 0; i < num.length; i++){
    //     sum +=Number(num[i]);    
    // }
    // let result = sum.toString().includes('9');
    // console.log(result ? 
    //     `${num} Amazing? True` : 
    //     `${num} Amazing? False`);




    // let numToString = String(num);
    // let result = 0;
    // for(let i = 0; i < numToString.length; i++){
    //     let num = Number(numToString[i])
    //     result +=num;
    // }
    // let resultToString = String(result);
    // let isAmazing = false;
    // for(let i = 0; i < resultToString.length; i++){
    //     if(Number(resultToString[i])===9){
    //         isAmazing = true;
    //         break;
    //     }
    // }
    // let amazing = isAmazing ? "True" : "False";
    // console.log(`${num} Amazing? ${amazing}`)




//     let numToString = String(num);
//     let result = 0;
//     for(let i = 0; i < numToString.length; i++){
//         let num = Number(numToString[i])
//         result +=num;
//     }

//     console.log(`${num} Amazing? ${result.toString().indexOf("9") >= 0
//     ? "True"
//     : "False"
// }`)


let numToString = String(num);
let result = 0;
for(let i = 0; i < numToString.length; i++){
    let num = Number(numToString[i])
    result +=num;
}
    console.log(`${num} Amazing? ${result.toString().includes("9")
    ? "True"
    : "False"
}`)


}
solve(1233);