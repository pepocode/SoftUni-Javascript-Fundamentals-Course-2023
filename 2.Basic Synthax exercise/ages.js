function solve(age) { // second solve
  //if(age<0){
    //console.log("out of bounds")
  //}
  if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {//<=13 only
    console.log("child");
  } else if (age >= 14 && age <= 19) {//<=19 only
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {//<=65 only
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  } else {//remove
    console.log("out of bounds");//remove
  }
}
solve(20);

