// Tugas 9 - Class

const { min } = require("lodash");

// Soal No. 1 (Animal Class)

// Release 0
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get aname() {
        return this.name;
    }
    set aname(x) {
        this.name = x;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1
Animal.prototype.yell = function () {
    console.log("Auooo");
}

class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
}

Animal.prototype.jump = function () {
    console.log("hop hop");
} 

class Frog extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// Soal No. 2 (Function to Class)
class Clock {
    constructor({ template }) {
  
        let timer;
  
        function render() {
            let date = new Date();
  
            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
  
            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
  
            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
  
            let output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
  
            console.log(output);
        }
  
        this.stop = function () {
            clearInterval(timer);
        };
  
        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };
    }
}
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start(); 