"use strict";
// unknown typeof
const getSpeedInMeterPerSecond = (value) => {
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    if (typeof value === 'string') {
        const [result, unit] = value.split(' ');
        const convertedSpeed = (parseFloat(result) * 100) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
};
getSpeedInMeterPerSecond(`1000 kmh^-1`);
