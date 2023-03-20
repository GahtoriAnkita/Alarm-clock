// some basic variables
let display = document.getElementById('clock');
const audio = new Audio("clock-alarm-8761.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;





// display clock
function updateTime() {
    const date = new Date();
    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    display.innerText = hour + " : " + minutes + " : " + seconds;
}
function formatTime(time) {
    if (time < 10)
        return "0" + time;
    return time;
}
setInterval(updateTime, 1000);


// set the alarm
function setAlarmTime(value) {
    alarmTime = value;
    // alert(alarmTime);
}

function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(function () {
                audio.play();

            }, timeout);

            alert('alarm set')
        }
    }
}


// clear alarm

function stopAlarm() {
    audio.pause()
}
function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('alarm cleared!')
    }
}