const cur_dateTime = new Date();

function currentDate(){

// adjust 0 before single digit date
    let date = ("0" + cur_dateTime.getDate()).slice(-2);

    let month = ("0" + (cur_dateTime.getMonth() + 1)).slice(-2);

    let year = cur_dateTime.getFullYear();

    return[month, date, year].join('-');
}

function currentTime(){
    let hours = cur_dateTime.getHours();

    let minutes = ("0" +cur_dateTime.getMinutes()).slice(-2);

    let seconds = ("0" +cur_dateTime.getSeconds()).slice(-2);

    return[hours, minutes, seconds].join(':');
}

module.exports={currentDate, currentTime};
