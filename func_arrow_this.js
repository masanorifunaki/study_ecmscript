const Counter = function() {
  this.count = 0;
  setInterval(() => this.count++, 1000);
};

let c = new Counter();
console.log(c);