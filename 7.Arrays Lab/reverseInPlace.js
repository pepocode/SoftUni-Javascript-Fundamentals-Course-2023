function reverse(arr) {
    let k = arr.length-1;
    for(let i = 0; i<arr.length / 2; i++){
        let temp = arr[i];
        
        arr[i]= arr[k-i];
        arr[k-i] = temp;

    }
    console.log(arr.join(" "));

}
reverse(['a', 'b', 'c', 'd', 'e']);