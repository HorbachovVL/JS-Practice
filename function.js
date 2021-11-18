'use strict'

// =========================================================
// Callback
// =========================================================

function fn(callback) {
    console.log('fn')

    callback();
}

const sayHello = () => {
    console.log('Hello');
}

fn(sayHello);

// =========================================================
// Абстрагування повторення
// =========================================================

function repeat(count, callback) {
    for (let i = 0; i < count; i++) {
        callback()
    }
}

function sayHello() {
    console.log('Hello')
}

function sayBye() {
    console.log('Bye')
}

repeat(5, sayHello);
repeat(3, sayBye);

// =========================================================
// Фільтрація масивів
// =========================================================

const numbers = [1, 2, 3, 4, 5, 6];

function filter(arr, callback) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
        result.push(arr[i])
        }
    }
    
    return result
}

const person = [
    {
        name: 'Bobby',
        age: 15
    },
    {
        name: 'Peter',
        age: 20
    },
    {
        name: 'Lisa',
        age: 25
    }
]

console.log(filter(person, ({ age }) => age > 15))
console.log(filter(numbers, x => x < 4))
console.log(filter(numbers, x => x > 4))

// =========================================================
// Замикання
// =========================================================
function counter(name) {
    let x = 0;

    function increment() {
        console.log(`${name}: ${x++}`);
    }

    return increment;
}

counter1 = counter('counter 1');
counter2 = counter('counter 2');

counter1();
counter2();
counter2();
counter2();

// =========================================================
// this
// =========================================================

const obj = {
    name: 'Bobby',
    age: 15,
    sayHello() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

// obj.sayHello();

// const obj1 = {
//     name: 'Bobby',
//     age: 15,
//     sayHello() {
//         console.log(this)
//     }
// }

// function fn(callback) {
//     callback();
// }

// fn(obj1.sayHello);

// =========================================================
// call, apply
// =========================================================

function sayName() {
    console.log(this.name)
}

const obj1 = {
    name: 'Bobby',
    age: 15
};

obj2 = {
    name: 'Peter',
    age: 20
};

sayName.call(obj1);
sayName.apply(obj2);
sayName.call(obj1, 1, 2, 3, 4);
sayName.apply(obj2, [1, 2, 3, 4]);

// =========================================================
// bind
// =========================================================

function sayName() {
    console.log(this);
    console.log(`Hello, my name is ${this.name}`);
}

const obj1 = {
    name: 'Bobby',
    age: 15
};

setTimeout(sayName.bind(obj1), 2000);


function sayName() {
    console.log(this);
}

const obj3 = {
    name: 'Bobby',
    age: 15
};

function myBind(callback, scope) {
    return function() {
        callback.call(scope);
    }
}

const myHello = myBind(sayName, obj3);
myHello();

// =========================================================
// this в стрілкових функціях
// =========================================================

const arrow = (a, b) => {
    // console.log(this)
    return a + b;
}

console.log(arrow(1, 1))
console.log(arrow(2, 2))

const obj = {
    name: 'Bobby',

    fn() {
        const innerArrowFn = () => {
            console.log(this);
        }

        return innerArrowFn;
    }
}
const hello = obj.fn();
hello();