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

function curDateMonthString(){

    // adjust 0 before single digit date
        let date = ("0" + cur_dateTime.getDate()).slice(-2);
    
        let month = cur_dateTime.toLocaleString('default', { month: 'short' });
    
        let year = cur_dateTime.getFullYear();
    
        return[month, date, year].join('-');
    }

module.exports={currentDate, currentTime, curDateMonthString};
