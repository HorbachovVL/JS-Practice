'use strict';

// =========================================================
// Створення об'єктів
// =========================================================

// const human = {
//     name: 'Bobby',
//     age: 15
// };

// const human2 = human;
// human2.age = 20;
// console.log(human);

// =========================================================
// Доступ до об'єктів
// =========================================================

// const human = {
//     name: 'Bobby',
//     age: 15
// };

// console.log(human.age);
// console.log(human['name'])

// const obj = {a: 1};
// human[obj] = 5;
// console.log(human);

// =========================================================
// Короткі властивості
// =========================================================

// const getHuman = (name, age) => {
//     return {
//         name,
//         age
//     }
// }

// console.log(getHuman('Bobby', 15))

// =========================================================
// Методи об'єктів
// =========================================================

// const human = {
//     name: 'Bobby',
//     sayHello: function () {
//         console.log(`Hello my name is ${this.name}`)
//     },
//     sayBye() {
//         console.log('Bye');
//     },
//     inner: {
//         someKey: 555
//     }
// }
// human.sayBye();
// human.sayHello();
// console.log(human.inner.someKey)

// =========================================================
// Цикл for in
// =========================================================

// const human = {
//     name: 'Bobby',
//     age: 15
// }

// for (let key in human) {
//     console.log(key);
//     console.log(human[key])
// }

// =========================================================
// Object.keys()
// =========================================================

const human1 = {
    name: 'Bobby',
    age: 15
}

// console.log(Object.keys(human));
// Object.keys(human).forEach(key => console.log(key, human[key]))

const getAge = (obj, key) => {
    let result;
    Object.keys(obj).forEach(item => {
        if (item === key) {
            result = obj[key]
        }
    })

    return result;
}
console.log(getAge(human1, 'age'));

// =========================================================
// Object.values()
// =========================================================

const human2 = {
    name: 'Bobby',
    age: 15
}

console.log(Object.values(human2))

// =========================================================
// Object.entries()
// =========================================================

const human3 = {
    name: 'Bobby',
    age: 15
}

console.log(Object.entries(human3))


// =========================================================
// spread
// =========================================================

const arr = [1, 2, 3, 4, 5];
console.log(arr)

console.log(Math.max(1, 12, 9, 35))
console.log(Math.max(...arr))

const arr1 = [1, 2, 3],
      arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3) 



const obj1 = {
    name: 'Bobby',
    sex: 'Male'
}

const obj2 = {
    age: 15
}

const obj3 = {
    ...obj1, 
    ...obj2
};
console.log(obj3)

// =========================================================
// rest
// =========================================================

const fn = (a, b, ...rest) => {
    console.log(rest)
    return a + b;
}

console.log(fn(5, 10, 555, 45, 33))

// =========================================================
// Деструктуризація
// =========================================================

const sayHello = (obj) => {
    const {name , age} = obj
    console.log(`My name ${name} and my age ${age}`)
}

const human = {
    name: 'Bobby',
    age: 15
}

sayHello(human)