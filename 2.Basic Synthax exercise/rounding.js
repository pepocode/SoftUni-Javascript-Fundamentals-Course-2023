function solve(num1,num2){
    if(num2 >15){
        num2 = 15;
    }
    let roundedNumber = num1.toFixed(num2);//no
    console.log(parseFloat(roundedNumber));//inside directly or Number(parseFloat....)
    
}
solve(3.1415926535897932384626433832795,2);
/*
function solve(){

}
*/