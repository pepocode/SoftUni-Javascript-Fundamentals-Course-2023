function solve(digit){
    let res = 0;
    switch (digit){
        case 'zero':res;break;
        case 'one':res = 1;break;
        case 'two':res = 2;break;
        case 'three':res = 3;break;
        case 'four':res =4;break;
        case 'five':res =5;break;
        case 'six':res =6;break;
        case 'seven':res = 7;break;
        case 'eight':res=8;break;
        case 'nine':res=9;break;
        case 'ten':res = 10;break;
    }
    console.log(res)
}
solve('nine')