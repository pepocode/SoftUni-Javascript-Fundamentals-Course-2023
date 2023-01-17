function solve(num){

    for(let row = 1;row <= num;row++){

        let printLine = '';

        for(let col=0; col <=row;col++){
            printLine+=`${row} `;
        }
        console.log(printLine);
    }
}
solve(3);

/*'* for( let row = 0; row <= num; row++){
        let buff = '';
        for( let col = 0; col < row; col++){
            buff +=row + '';
        }
}console.log( buff);

*/