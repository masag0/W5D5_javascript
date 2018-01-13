class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

    let dateObj = new Date(Date.now());
    this.date = dateObj.toLocaleTimeString();
    setInterval(this._tick.bind(this), 1000);
    this.hours = parseInt(this.date.slice(0,2));
    this.minutes = parseInt(this.date.slice(3,5));
    this.seconds = parseInt(this.date.slice(6,8));
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    this.seconds += 1;
    if (this.seconds === 60) {
      this.minutes += 1;
      this.seconds = 0;
      if (this.minutes === 60) {
        this.hours += 1;
        this.minutes = 0;
        if (this.hours === 24) {
          this.hours = 0;
        }
      }
    }
    this.printTime();


  }
}

const clock = new Clock();
clock._tick();
