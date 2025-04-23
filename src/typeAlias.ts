{
// Type Alias
// type alias for object
type Student = {
    name:string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}

const student1:Student = {
    name: 'Shohidul',
    age: 35,
    gender: 'male',
    contactNo: '12344t44',
    address: 'ctg'

}
const student2:Student = {
    name: 'Galib',
    age: 30,
    gender: 'male',
    contactNo: '12344t44',
    address: 'dhk'

}

// type alias for string
type UserName = string;
type IsAdmin = boolean;
const userName: UserName = 'shohidul';
const isAdmin: IsAdmin = true;

// type alias for function

type Add =(num1:number, num2:number)=> number

const add:Add = (num1,num2)=> num1 + num2;

}