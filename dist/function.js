"use strict";
// Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(23, 45);
// Arrow Function
const addNumber = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: 'Arifin',
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
// using typeScript on map method
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((elem) => elem * elem);
