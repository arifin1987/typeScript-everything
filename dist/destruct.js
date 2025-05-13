"use strict";
// Object Destructuring
const user = {
    id: 234,
    name: {
        firstName: 'Shohidul',
        middleName: 'Arifin',
        lastName: 'Likhon',
    },
    contactNo: '0177000000',
    address: 'Bangladesh'
};
const { contactNo, name: { firstName } } = user;
// Array Destructuring
const myFriends = ['abul', 'kabul', 'sohel', 'saju', 'monica', 'mimi'];
const [, , bestFriend, ...rest] = myFriends;
