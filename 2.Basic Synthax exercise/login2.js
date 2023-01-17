function solve(input){

    let username = input[0];
    let password = '';
    for(let i = username.length-1; i >=0; i--){
        password += username[i];
    }
    let inncorectPassCount = 0;
    for( let i = 1; i < input.length; i++){
        let tempPassword = input[i];
        
        if(tempPassword === password){
            console.log(`User ${username} logged in`);
        }else{

            inncorectPassCount++;
            if(inncorectPassCount===4){
                console.log(`User ${username} blocked`);
                break;
            }
            console.log(`Incorrect password.Try again.`);
        }
    }
    
}
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);