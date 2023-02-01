// function dungeonDark(arr){
//     let dungen = arr[0].split('|');
//     let health = 100;
//     let coins = 0;
//     let counterRooms = 0;
//     let allCoins = 0;
   
//     for(let i = 0; i < dungen.length;i++){
//         let currentRoom = dungen[i].split(' ');
//         let command = currentRoom[0];
//         let num = Number(currentRoom[1]); 
//         counterRooms++;
   
//         if(command === 'potion'){
 
//           if (health + num > 100) {
//             num = 100 - health;
//             health = 100;
//           } else
//           {
//             health += num;
//           }
//           console.log(`You healed for ${num} hp.`);
//           console.log(`Current health: ${health} hp.`);
   
                 
//         }else if(command === 'chest'){
//           coins = Number(num);
//           allCoins += Number(num);
//           console.log(`You found ${coins} coins.`);
   
//         }else{
//           health -= Number(num);
//           if(health > 0){
//             console.log(`You slayed ${command}.`);
//           }else{
//             console.log(`You died! Killed by ${command}.`);
//             console.log(`Best room: ${counterRooms}`);
//             //Може направо да прекъснем програмата
//             return;
//           }
         
//         }           
//     }
    
//       console.log(`You've made it!`);
//       console.log(`Coins: ${allCoins}`);
//       console.log(`Health: ${health}`); 
//   }
   
//   dungeonDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);





  function dungeonDark(input){
    let rooms = input[0].split("|");
    let health = 100;
    let isOver = false;

    for( let room of rooms){
      let commands = room.split(' ');
      let command = commands[0];
      let value = Number(commands[1]);
      switch ( command){
        case "potion":
        if(value + health > 100){
          value =value - (value + health -100);
        }
        health +=value
        console.log(`You healed for ${value} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
        case "chest":
          coins +=
        default:
          health -=value;
          if(health >0){
            console.log(`You slayed ${command}.`);
          }else {
            isOver = true;
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: {room}`);
          }
          break;
      }
      if (isOver){
        break;
      }
    }

    
  }
dungeonDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);