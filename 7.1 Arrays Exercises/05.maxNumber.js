function solve(array) {
    
    let newArray = [];
    let arrayL = array.length;

    for(let index = 0 ; index < arrayL; index++){
        let number1 = array[index];
        let isLargest = true;
        for(let j = index+1;j < arrayL; j++){
            let number2 = array[j];
            if(number1<=number2){
                isLargest = false;
            }
        }
        if(isLargest){
            newArray.push(number1);
        }
    }
    console.log(newArray.join(' '));
}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);