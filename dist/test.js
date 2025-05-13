"use strict";
{
    const stud1 = {
        php: 'shohidul',
        score: '34',
    };
    const stud2 = {
        name: 'habib',
        age: '45',
    };
    const result = Object.assign(Object.assign({}, stud1), stud2);
    console.log(result);
}
