// const { func } = require("assert-plus");

const { func } = require("assert-plus");

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
    labelSeconds: document.querySelector('.label_secs'),
    labelMinutes: document.querySelector('.label_mins'),
    labelHours: document.querySelector('.label_hours'),
    labelDays: document.querySelector('.label_days'),
}

let startTime = Date.now();
let currentTime = null;
let intervalId = null;
let resultSecs = null;
let timeSec = null;
let timeMin = null;
let timeHour = null;
let countDay = null;

intervalId = setInterval(getDifferenceTime, 1000);

function getDifferenceTime() {
    currentTime = Date.now();
    resultSecs = Math.floor((currentTime - startTime) / 1000);
    timing();
    pad();
    // timeSec = resultSecs % 60;
    // timeMin = Math.floor((resultSecs % (60 * 60)) / 60);
    // timeHour = Math.floor((resultSecs % (60 * 60 * 24)) / (60 * 60));
    // countDay = Math.floor(resultSecs / (60 * 60 * 24));

    // refs.seconds.textContent = timeSec < 10 ? `0${timeSec}` : timeSec;
    // refs.labelSeconds.textContent = timeSec === 01 ? 'Second' : 'Seconds';

    // refs.minutes.textContent = timeMin < 10 ? `0${timeMin}` : timeMin;
    // refs.labelMinutes.textContent = timeMin === 01 ? 'Minute' : 'Minutes';

    // refs.hours.textContent = timeHour < 10 ? `0${timeHour}` : timeHour;
    // refs.labelHours.textContent = timeHour === 01 ? 'Hour' : 'Hours';

    // refs.days.textContent = countDay < 10 ? `0${countDay}` : countDay;
    // refs.labelDays.textContent = countDay === 01 ? 'Day' : 'Days';
}

function timing() {
    timeSec = resultSecs % 60;
    timeMin = Math.floor((resultSecs % (60 * 60)) / 60);
    timeHour = Math.floor((resultSecs % (60 * 60 * 24)) / (60 * 60));
    countDay = Math.floor(resultSecs / (60 * 60 * 24));
}

function pad() {
    refs.seconds.textContent = timeSec < 10 ? `0${timeSec}` : timeSec;
    refs.labelSeconds.textContent = timeSec === 01 ? 'Second' : 'Seconds';

    refs.minutes.textContent = timeMin < 10 ? `0${timeMin}` : timeMin;
    refs.labelMinutes.textContent = timeMin === 01 ? 'Minute' : 'Minutes';

    refs.hours.textContent = timeHour < 10 ? `0${timeHour}` : timeHour;
    refs.labelHours.textContent = timeHour === 01 ? 'Hour' : 'Hours';

    refs.days.textContent = countDay < 10 ? `0${countDay}` : countDay;
    refs.labelDays.textContent = countDay === 01 ? 'Day' : 'Days';
}