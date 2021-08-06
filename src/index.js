const { func } = require('assert-plus');

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
  labelSeconds: document.querySelector('.label_secs'),
  labelMinutes: document.querySelector('.label_mins'),
  labelHours: document.querySelector('.label_hours'),
  labelDays: document.querySelector('.label_days'),
};

class countdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.intervalId = null;
    this.timeSec = null;
    this.timeMin = null;
    this.timeHour = null;
    this.countDay = null;

    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }

  intervalId = setInterval(() => {
    let currentTime = Date.now();
    let differentTime = Math.floor((this.targetDate - currentTime) / 1000);
    let time = this.timeComponents(differentTime);

    this.onTick(time);
  }, 1000);

  timeComponents(value) {
    this.timeSec = value % 60;
    this.timeMin = Math.floor((value % (60 * 60)) / 60);
    this.timeHour = Math.floor((value % (60 * 60 * 24)) / (60 * 60));
    this.countDay = Math.floor(value / (60 * 60 * 24));
  }
}

const timer = new countdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 31, 2021'),
  onTick: renderingTime,
});

function renderingTime() {
  refs.seconds.textContent = this.timeSec < 10 ? `0${this.timeSec}` : this.timeSec;
  refs.labelSeconds.textContent = this.timeSec === 01 ? 'Second' : 'Seconds';

  refs.minutes.textContent = this.timeMin < 10 ? `0${this.timeMin}` : this.timeMin;
  refs.labelMinutes.textContent = this.timeMin === 01 ? 'Minute' : 'Minutes';

  refs.hours.textContent = this.timeHour < 10 ? `0${this.timeHour}` : this.timeHour;
  refs.labelHours.textContent = this.timeHour === 01 ? 'Hour' : 'Hours';

  refs.days.textContent = this.countDay < 10 ? `0${this.countDay}` : this.countDay;
  refs.labelDays.textContent = this.countDay === 01 ? 'Day' : 'Days';
}
