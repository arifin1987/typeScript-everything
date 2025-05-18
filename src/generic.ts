{

// generic type
type GenericArray<T> = Array<T>

// const rollNumbers: number[]= [3,4,5];
const rollNumbers: GenericArray<number>= [3,4,5];

// const mentors:string[]= ['rahim', 'karim', 'hasan'];
const mentors:GenericArray<string>= ['rahim', 'karim', 'hasan'];

// const boolArray: boolean[]= [true, false, true];
const boolArray: GenericArray<boolean>= [true, false, true];

const user: GenericArray<{name:string, age:number}> = [
    {
        name: 'Arifin',
        age: 35
    },
    {
        name: 'Salam',
        age: 34
    }
]

// generic tuple
type GenericTuple<X,Y> = [X,Y]

const human:GenericTuple<string, string> = ['job', 'degree']

const userWithId : GenericTuple<number, {name:string, email: string}> = [1234, {name: 'Aifin', email: 'arifin@gmail.com'}]

}