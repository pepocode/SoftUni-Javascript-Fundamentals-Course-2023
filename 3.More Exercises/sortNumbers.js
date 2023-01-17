function solve(a, b, c){
    let array = [a, b, c];
    let result = array.sort((a,b) => b-a);
    console.log(result.join("\n"));
}
solve(2, 1, 3)