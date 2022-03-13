
let a;
let date;
let time;
let day;
const dayss = {weekday: 'long'};
const options = {year: 'numeric', month: 'long', day: 'numeric'};
setInterval(() => {
    
a = new Date();
day = a.getDay(undefined, dayss);
date = a.toLocaleDateString(undefined, options);
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = date;
document.getElementById('day').innerHTML = day;
},1000);