"use strict";
var _a, _b;
{
    // nullish coalescing operatorr
    // null | undefined ---> decision making
    // Decision will be made based on null and undefined
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const user = {
        name: 'Shohidul',
        address: {
            city: 'mym',
            road: 'sankipara',
            presentAddress: 'mym town'
        }
    };
    // nullish operato ?? only works on null and undefined
    // here permanent address found undefined , that's why we used nullish operator to show 'No permanent address'
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanent Address';
    console.log(permanentAddress);
}
