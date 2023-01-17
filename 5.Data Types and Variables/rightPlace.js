function solve(firstString, firstChar, secondString){

    // let result = '';
    // //let result1=firstString.replace('_', firstChar);
    // for(let i = 0; i < firstString.length; i++){
    //     let currentChar = firstString[i];
    //     if(currentChar === "_"){
    //         result += firstChar;
    //     }else{
    //         result += currentChar;
    //     }
    // }
    // if(result === secondString){
    //      console.log("Matched");
    // }else{
    //     console.log("Not Matched");
    // }

    let res=firstString.replace('_',firstChar);
    let output=res===secondString? "Matched":"Not Matched";
    console.log(output);
}
solve('Str_ng', 'i', 'String')