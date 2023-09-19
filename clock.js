
const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

function updateTime(){
    
   

    var now = new Date();

    document.getElementById('time').innerText = 
        zeroPaddding(now.getHours(), 2) + ":" +
        zeroPaddding(now.getMinutes(), 2) + ":" +
        zeroPaddding(now.getSeconds(), 2);

    document.getElementById('date').innerText = 
        now.getFullYear() + "-" +
        zeroPaddding(now.getMonth() + 1, 2) + "-" +
        zeroPaddding(now.getDate(), 2) + " " +
        WEEK[now.getDay()];

}
updateTime();
setInterval(updateTime, 1000);

function zeroPaddding(num, digit){
    return String(num).padStart(digit, '0')
}