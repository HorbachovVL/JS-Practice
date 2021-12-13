'use strict';
//========================================================================
// pure function
//========================================================================
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));
console.log(sum(2, 3));

function pureSort(items) {
    const newItems = [...items]

    newItems.sort();
    return newItems;
}

const arr = [2, 1, 5, 3, 4];
console.log(arr);
console.log(pureSort(arr));
console.log(arr)

//========================================================================
// forEach
//========================================================================

const arr = [1, 2, 3]

arr.forEach((item) => {
    console.log(item);
})

//========================================================================
// map
//========================================================================

const arr = ['Bobby', 'Peter', 'Chris'];

const newArr = arr.map(item => {
    return item + 'Yes';
})

console.log(newArr)

const arr = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]

const names = arr.map(({ name }) => name);
console.log(names)

//========================================================================
// filter
//========================================================================

const arr = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]


const newArr = arr.filter(item => item.age > 20);
console.log(newArr)

//========================================================================
// find
//========================================================================

const arr = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]


const bobby = arr.find(item => item.name === 'Peter');
console.log(bobby)

//========================================================================
// every
//========================================================================

const arr = [1, 2, 3, 4, 5, 6]

const allEven = arr.every(item => item % 2 === 0);
console.log(allEven)

//========================================================================
// some
//========================================================================

const arr = [1, 2, 3, 4, 5, 6]

const someEven = arr.some(item => item % 2 === 0);
console.log(someEven)

//========================================================================
// reduce
//========================================================================

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, item) => {
    return acc + item;
}, 0);
const min = arr.reduce((acc, item) => {
    if (item < acc) {
        return item;
    }
    return acc;
});

const max = arr.reduce((acc, item) => {
    if (item > acc) {
        return item;
    }
    return acc;
});

console.log(sum);
console.log(min);
console.log(max);

//========================================================================
// sort
//========================================================================

const arr = [9, 11,2, 34, 5, 1, 22, 3]

arr.sort((a, b) => a - b);

console.log(arr)


const arr = [
    {name: 'Peter', age: 25},
    {name: 'Bobby', age: 15},
    {name: 'Chris', age: 35}
]

arr.sort(({age: a}, {age: b}) => {
    // if (a.age < b.age) {
    //     return -1;
    // }
    // if (a.age > b.age) {
    //     return 1;
    // }
    // return 0
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0
});

console.log(arr)

//========================================================================
// chaining
//========================================================================

const arr = [
    {name: 'Peter', age: 25},
    {name: 'Bobby', age: 15},
    {name: 'Chris', age: 35}
];

const newArr = arr
    .filter(({ age }) => age > 18)
    .map(({ age }) => age)
    .reverse().reduce((a, b) => a + b)

console.log(newArr)