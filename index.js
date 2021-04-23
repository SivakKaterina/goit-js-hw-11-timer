class CountdownTimer{
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    };

    refs = {
        days: document.querySelector('[data-value="days"]'),
        hours: document.querySelector('[data-value="hours"]'),
        mins: document.querySelector('[data-value="mins"]'),
        secs: document.querySelector('[data-value="secs"]'),
    }

    timer() {
        setInterval(() => {
            const dateNow = Date.now();
            const time = this.targetDate - dateNow;

            this.refs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
            this.refs.hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.refs.mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            this.refs.secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
        }, 1000);
         
    }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.timer();

