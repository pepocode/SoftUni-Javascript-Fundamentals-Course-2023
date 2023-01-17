// function solve(num1, num2) {
//   let sum = 0;
//   let printLine = "";

//   for (let i = num1; i <= num2; i++) {
//     sum += i;

//     if (i === num2) { 
//       printLine += `${i}`;
//     } else {
//       printLine += `${i} `;
//     }
//   }
//   console.log(printLine);
//   console.log(`Sum: ${sum}`);
// }
// solve(5, 10);
function printAndSum(start, end){
  let buffNumber = "";
  let sum = 0;
  for(let i = start; i <= end; i++){
    buffNumber+= i +" ";
    sum +=i;
  }
  console.log(buffNumber);
  console.log("Sum: " + sum);
}
printAndSum(5, 10);
//trim funckciqta maha praznoto sled 4isloto 10