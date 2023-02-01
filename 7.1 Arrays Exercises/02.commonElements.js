// function solve(arr1, arr2){

//     for (const element of arr1){
//         if(arr2.includes(element)){
//             console.log(element);
//         }
//     }

// }
// solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
// ['Petar', 10, 'hey', 4, 'hello', '2']
// );

function solve(firstArray, secondArray) {
    for(let i = 0; i < firstArray.length;i++){
        let firstWord = firstArray[i];
    
        for(j=0;j < secondArray.length;j++){
            let secondWord = secondArray[j];
        
        if(firstWord === secondWord){
            console.log(firstWord)
        }
    }
} 
} 

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);