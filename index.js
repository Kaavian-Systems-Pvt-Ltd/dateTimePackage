let cur_date = new Date();

// adjust 0 before single digit date
let date = ("0" + cur_date.getDate()).slice(-2);

let month = ("0" + (cur_date.getMonth() + 1)).slice(-2);

let year = cur_date.getFullYear();

let hours = cur_date.getHours();

let minutes = cur_date.getMinutes();

let seconds = cur_date.getSeconds();

console.log(month + "-" + date + "-" + year);

//console.log(month + "-" + date + "-" + year + " " + hours + ":" + minutes + ":" + seconds);

console.log(hours + ":" + minutes + ":" + seconds);