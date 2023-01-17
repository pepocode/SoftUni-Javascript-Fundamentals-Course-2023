function solve(num1, num2, num3) {

    let sum = num1 + num2 + num3;


    // sum % 1 === 0 ? sum +=' - Integer': sum += ' - Float';
    // console.log(sum);




    // if(sum % 1 === 0){
    //     console.log(`${sum} - Integer`);
    // }else{
    //     console.log(`${sum} - Float`);
    // }




    // let resToString = String(sum);
    // let isFloat = false;
    // for(let i = 0; i < resToString.length; i++){
    //     if( resToString[i]==='.'){
    //         isFloat = true;
    //     }
    // }
    // console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);


    
    console.log(`${sum} - ${parseInt(sum)===sum ? "Integer" : "Float"}`);

}
solve(9, 100, 1.1);