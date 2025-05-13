"use strict";
// nullable types
const searchName = (value) => {
    if (value) {
        console.log('Searching');
    }
    else {
        console.log('there is nothing to search');
    }
};
searchName(null);
