const cur_dateTime = new Date();

function currentDate(){

// adjust 0 before single digit date
    let date = ("0" + cur_dateTime.getDate()).slice(-2);

    let month = ("0" + (cur_dateTime.getMonth() + 1)).slice(-2);

    let year = cur_dateTime.getFullYear();

    return[month, date, year].join('-');
}

function currentTime(){
    const curTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Calcutta',
      })

      let time = curTime.substr(curTime.length - 11);

      if (time[0] === ' ') {
        time = time.replace(/ /, '0');
      }
    return(time);
}

module.exports={currentDate, currentTime};
