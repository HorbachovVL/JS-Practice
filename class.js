'use strict'

// =========================================================
// constructor
// =========================================================

const car = {
    currentSpeed: 52,
    maxSpeed: 220,
    color: 'red',
    incrementSpeed() {
        currentSpeed + 1;
    }
};

function Human(name, age) {
    this.name = name;
    this.age = age;

    // this.sayHello = function() {
    //     console.log('Hello')
    // }
};

Human.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}`)
}

const bobby = new Human('Bobby', 15);
console.log(bobby);
bobby.sayHello()

const peter = new Human('Peter', 25);
console.log(peter);

// =========================================================
// prototype
// =========================================================

// function Human(name, age) {
//     this.name = name;
//     this.age = age;
// };

// Human.prototype.sayHello = function() {
//     console.log(`Hello my name is ${this.name}`)
// }

// Human.prototype.getAge = function() {
//     console.log(`My age is ${this.age}`)
// }

// const julia = new Human('Julia', 29);
// console.log(julia);
// julia.sayHello();
// julia.getAge();


function Human(name, age) {
    this.name = name;
    this.age = age;
};

Human.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}`)
}

function Doctor(name, age) {
    Human.call(this, name, age);
}

Doctor.prototype = Object(Human.prototype)
Doctor.prototype.constructor = Doctor
Doctor.prototype.heal = function() {
    console.log("I'm healing");
}


const drHouse = new Doctor('Gregory House', 55);
console.log(drHouse);
drHouse.heal();
drHouse.sayHello();


// =========================================================
// Class
// =========================================================

class Human {
    constructor(name, age, job) {
        this.age = age;
        this.name = name;
        this.job = job;
    }
    saySomething() {
        console.log(`Hello my name is ${this.name} i'm ${this.age} old, and my job is ${this.job}`)
    }
}

class Driver extends Human {
    constructor(name, age, job, saySomething) {
        super(name, age, job, saySomething)
    }
}

const driver = new Driver('Bob', 50, 'Driver');
console.log(driver);
driver.saySomething();


class Tester extends Human {
    constructor(name, age, job, saySomething) {
        super(name, age, job, saySomething)
    }
}

const tester = new Tester('Jack', 25, 'Tester');
console.log(tester);
tester.saySomething();