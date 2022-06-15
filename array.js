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

const arr2 = [2, 1, 5, 3, 4];
console.log(arr2);
console.log(pureSort(arr2));
console.log(arr2)

//========================================================================
// forEach
//========================================================================

const arr3 = [1, 2, 3]

arr3.forEach((item) => {
    console.log(item);
})

//========================================================================
// map
//========================================================================

const arr4 = ['Bobby', 'Peter', 'Chris'];

const newArr2 = arr4.map(item => {
    return item + ' Yes';
})

console.log(newArr2)

const arr5 = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]

const names = arr5.map(({ name }) => name);
console.log(names)

//========================================================================
// filter
//========================================================================

const arr6 = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]


const newArr3 = arr6.filter(item => item.age > 20);
console.log(newArr3)

//========================================================================
// find
//========================================================================

const arr7 = [
    {name: 'Bobby', age: 15},
    {name: 'Peter', age: 25},
    {name: 'Chris', age: 35}
]


const bobby = arr7.find(item => item.name === 'Peter');
console.log(bobby)

//========================================================================
// every
//========================================================================

const arr8 = [1, 2, 3, 4, 5, 6]

const allEven = arr8.every(item => item % 2 === 0);
console.log(allEven)

//========================================================================
// some
//========================================================================

const arr9 = [1, 2, 3, 4, 5, 6]

const someEven = arr9.some(item => item % 2 === 0);
console.log(someEven)

//========================================================================
// reduce
//========================================================================

const arr10 = [1, 2, 3, 4, 5, 6];

const sum = arr10.reduce((acc, item) => {
    return acc + item;
}, 0);
const min = arr10.reduce((acc, item) => {
    if (item < acc) {
        return item;
    }
    return acc;
});

const max = arr10.reduce((acc, item) => {
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

const arr11 = [9, 11,2, 34, 5, 1, 22, 3]

arr11.sort((a, b) => a - b);

console.log(arr11)


const arr12 = [
    {name: 'Peter', age: 25},
    {name: 'Bobby', age: 15},
    {name: 'Chris', age: 35}
]

arr12.sort(({age: a}, {age: b}) => {
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

console.log(arr12)

//========================================================================
// chaining
//========================================================================

const arr13 = [
    {name: 'Peter', age: 25},
    {name: 'Bobby', age: 15},
    {name: 'Chris', age: 35}
];

const newArr4 = arr13
    .filter(({ age }) => age > 18)
    .map(({ age }) => age)
    .reverse().reduce((a, b) => a + b)

console.log(newArr4)