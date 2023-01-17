function solve(input){
    let sum = 0;
    let numberAsString = input.toString();

    for(let i=0; i<numberAsString.length;i++){
     let currentDigit = Number(numberAsString[i]);
     sum +=currentDigit;
    }
    console.log(sum)
}
solve(543);