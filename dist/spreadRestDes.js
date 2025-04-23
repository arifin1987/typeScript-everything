"use strict";
// spread Operator for Array
const bros1 = ["rahim", 'karim', 'jasim'];
const bros2 = ['abul', 'lavlu', 'Kablu'];
bros1.push(...bros2);
// console.log(bros1)
// Spread operators for object
const mentors1 = {
    typescript: 'mezba',
    redux: 'mir',
    dbms: 'mizan'
};
const mentors2 = {
    graph: 'firoz',
    next: 'tonmoy'
};
const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
// console.log(mentorList)
// Rest Operator
const friendZone = (...friends) => {
    friends.forEach((friend) => {
        console.log(`hello ${friend}`);
    });
};
friendZone('hasib', 'aziz', 'sohel');
