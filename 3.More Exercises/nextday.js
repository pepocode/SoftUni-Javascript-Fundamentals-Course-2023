function calcNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);//month - 1;day + 1
    let oneDay = 24 * 60 * 60 * 1000;//86 400 000 milliseconds in one day
    let nextDate = new Date(date.getTime() + oneDay);
    console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
}
 
calcNextDay(2016, 9, 30);