let time = {
    hours: 12,
    minutes: 45,
    seconds: 17,
    showTime: function() {
      alert(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    addSeconds: function(seconds) {
      if (seconds <= 0) {
        alert("You entered incorrect time!");
      } else if (seconds + this.seconds >= 60) {
        let differenceMin = Math.floor((this.seconds + seconds) / 60);
        this.seconds = (this.seconds + seconds) % 60;
        this.addMinutes(differenceMin);
      } else {
        this.seconds += seconds;
      }
    },
    addMinutes: function(minutes) {
      if (minutes <= 0) {
        alert("You entered incorrect time!!!");
      } else if (this.minutes + minutes >= 60) {
        let differenceHours = Math.floor((this.minutes + minutes) / 60);
        this.minutes = (this.minutes + minutes) % 60;
        this.addHours(differenceHours);
      } else {
        this.minutes += minutes;
      }
    },
    addHours: function(hours) {
      if (hours <= 0) {
        alert("You entered incorrect time!");
      } else if (hours + this.hours >= 24) {
        this.hours = (this.hours + hours) % 24;
      } else {
        this.hours += hours;
      }
    }
  };
  
  time.showTime();
  time.addHours(25);
  time.showTime();
  time.addMinutes(120);
  time.showTime();
  time.addSeconds(360);
  time.showTime();
