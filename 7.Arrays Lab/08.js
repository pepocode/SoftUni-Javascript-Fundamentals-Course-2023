function condenseArrayToNumber(arr) {
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        num[i] = Number(arr[i]);
    }
    while (num.length > 1) {
        let condense = [];
        for (let i = 0; i < num.length - 1; i++) {
            condense[i] = Number(num[i] + num[i + 1]);
 
        }
        num = condense;
        condense = 0;
    }
    console.log(Number(num));
}
condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);