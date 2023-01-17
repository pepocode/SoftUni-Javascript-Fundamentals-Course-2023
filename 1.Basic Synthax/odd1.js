function OddSum(num) {
  let n = num;

  let sum = 0;

  let counter = 0;

  for (let i = 1; i <= 100; i += 2) { // ili i<= n*2; i++
    console.log(i);
              // samo sum +=i;
    counter++;

    sum += i;

    if (counter == n) {
      console.log(`Sum :${sum}`);

      break;
    }
  }
}

OddSum(3);
// let foundOddN = 0;
//while( foundOddN !==n){
// if(i %2 ===1){
//  console.log(i)
//foundOddN ++;
//sum +=i;
//}


//i++;
//}

