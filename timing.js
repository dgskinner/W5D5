function Clock () {
  
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {

  var hours = this.date.getHours();
  if (hours < 10) {
    hours = "0" + hours;}
  
  var minutes = this.date.getMinutes(); 
  if (minutes < 10) {
    minutes = "0" + minutes;}
    
  var seconds = this.date.getSeconds();  
  if (seconds < 10) {
    seconds = "0" + seconds;}
  
  return console.log(hours + ":" + minutes + ":" + seconds);
};

Clock.prototype.run = function () {
  this.date = new Date ();
  // this.hours = this.date.getHours();
  // this.minutes = this.date.getMinutes();
  // this.seconds = this.date.getSeconds();
  this.printTime();
  var clock = this;
  setInterval(function() {clock._tick()}, 5000);
};

Clock.prototype._tick = function () {
  var hours = this.date.getHours();
  var minutes = this.date.getMinutes(); 
  var seconds = this.date.getSeconds(); 
  if (seconds < 55) {

    this.date.setSeconds(seconds + 5);
  } else {
    this.date.setSeconds((seconds + 5) % 60);
      if (minutes < 59) {
        this.date.setMinutes(minutes + 1);
      } else {
          this.date.setMinutes(0);
          if (hours < 23) {
            this.date.setHours(hours +1);
          } else {
            this.date.setHours(0);
          }
      }
  }  
  this.printTime();
  // setTimeout(function() {clock._tick()}, 5000);
};



var clock = new Clock();

clock.run();