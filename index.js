const cur_date = new Date();

function currentDate(){

// adjust 0 before single digit date
    let date = ("0" + cur_date.getDate()).slice(-2);

    let month = ("0" + (cur_date.getMonth() + 1)).slice(-2);

    let year = cur_date.getFullYear();

    return[month, date, year].join('-');
}
console.log(currentDate(cur_date));

function currentTime(){
    let hours = cur_date.getHours();

    let minutes = ("0" +cur_date.getMinutes()).slice(-2);

    let seconds = ("0" +cur_date.getSeconds()).slice(-2);

    return[hours, minutes, seconds].join(':');
}
console.log(currentTime(cur_date));