function solve(str){

    let word = '';
    for(let i = str.length-1; i>=0;i--){
        word = word + str[i];
    }
    console.log(word)
}
solve('Hello')