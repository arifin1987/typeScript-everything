// Normal Function

function add(num1:number, num2:number):number{
    return num1 +num2;
}
 add(23,45)


// Arrow Function
const addNumber = (num1:number, num2:number):number=> num1 +num2;

// object --> function --> method

const poorUser = {
    name: 'Arifin',
    balance : 0,
    addBalance(balance:number):string{
        return `My new balance is : ${this.balance +balance}`

    }
}

// using typeScript on map method
const arr:number[] = [1,2,3,4,5];

const newArray:number[] = arr.map((elem:number):number => elem *elem);