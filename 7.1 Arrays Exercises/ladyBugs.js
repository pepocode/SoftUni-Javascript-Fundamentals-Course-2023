// function ladyBugs(arr) {
// 	let sizeOfField = arr[0];
// 	let ladybugsPositions = arr[1]
// 		.split(' ')
// 		.map(Number);
// 	let ladybugsArray = [];
 
// 	// fill the array with 0
// 	for (let i = 0; i < sizeOfField; i++) {
// 		ladybugsArray.push(0);
// 	}
// 	// mark starting ladybugs index
// 	for (let i = 0; i < sizeOfField; i++) {
// 		let ladybugIndex = ladybugsPositions[i];
// 		if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
// 			ladybugsArray[ladybugIndex] = 1;
// 		}
// 	}
 
// 	for (let i = 2; i < arr.length; i++) {
// 		// JS destructuring
// 		let [ladybugIndex, command, jumpLength] = arr[i].split(' ');
// 		ladybugIndex = +ladybugIndex;
// 		jumpLength = +jumpLength;
 
// 		if (ladybugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArray.length) {
// 			continue;
// 		}
// 		// check for negative steps
// 		if (jumpLength < 0) {
// 			jumpLength = Math.abs(jumpLength);
// 			if (command === 'right') {
// 				command = 'left';
// 			} else if (command === 'left') {
// 				command = 'right';
// 			}
// 		}
// 		// Free Position
// 		ladybugsArray[ladybugIndex] = 0;
// 		if (command === 'right') {
// 			// Ladybug jumps one time
// 			let newPosition = ladybugIndex + jumpLength;
// 			// Jump another time if there is a lady bug
// 			if (ladybugsArray[newPosition] === 1) {
// 				newPosition = newPosition + jumpLength;
// 			}
// 			if (newPosition <= ladybugsArray.length) {
// 				ladybugsArray[newPosition] = 1;
// 			}
 
// 		} else {
// 			// Lady bug jumps to the left
// 			let newPosition = ladybugIndex - jumpLength;
// 			// Jump another time if there is a lady bug
// 			if (ladybugsArray[newPosition] === 1) {
// 				newPosition = newPosition - jumpLength;
// 			}
// 			if(newPosition >= 0 ){
// 				ladybugsArray[newPosition] = 1;
// 			}
// 		}
 
// 	}
 
// 	console.log(ladybugsArray.join(' '));
 
// }
function ladybugs(array) {
    let workingArray = array.slice();
    let fieldSize = workingArray.shift();
    let bugsPosition = workingArray.shift().split(' ');
    let finalBugsArray = new Array(fieldSize).fill(0);
  
    for (const position of bugsPosition) {
      let currentBug = Number(position);
      if (currentBug < 0 || currentBug >= fieldSize) {
        continue;
      }
      finalBugsArray[currentBug] = 1;
    }
  
    for (let i = 0; i < workingArray.length; i++) {
      let [ladybugIndex, command, jumpLength] = workingArray[i].split(' ');
  
      ladybugIndex = Number(ladybugIndex);
  
      if (ladybugIndex < 0 || ladybugIndex >= finalBugsArray.length || finalBugsArray[ladybugIndex] !== 1) {
        continue;
      }
  
      // Free Position
      finalBugsArray[ladybugIndex] = 0;
  
      jumpLength = Number(jumpLength);
      
      if (command === 'left') {
        jumpLength = -jumpLength;
      }
  
      ladybugIndex += jumpLength;
      while (ladybugIndex >= 0 && ladybugIndex < finalBugsArray.length) {
        if (finalBugsArray[ladybugIndex] === 0) {
          finalBugsArray[ladybugIndex] = 1;
          break;
        }
        ladybugIndex += jumpLength;
      }
    }
  
    console.log(finalBugsArray.join(' '));
  }
ladybugs(	[ 5, '3',
	'3 left 2',
	'1 left -2']
);