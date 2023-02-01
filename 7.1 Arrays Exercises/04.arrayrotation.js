// function solve(array, rotations) {
//     while(rotations >0){
//         let elementToMove = array.shift();
//         array.push(elementToMove);
//         rotations--;
//     }
//     console.log(array.join(' '));
// }
// solve([51, 47, 32, 61, 21], 2);

// function solve(arr, rotationCount) {
//     let buffArr = [];
//     for(let i = 0; i < rotationCount; i++){
//         let currentElement = arr[0];
//         for(let j = 1; j < arr.length; j++){
        
//             buffArr.push(arr[j]);
//     }       
//             buffArr.push(currentElement)
//             arr = buffArr;
//             buffArr = [];
//         }
//         console.log(arr.join(" "))
//     }
    

// solve([51, 47, 32, 61, 21], 2);



function solve(arr, rotationCount){

for(let i = 0; i < rotationCount; i++){
    arr.push(arr.shift());
}
console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);