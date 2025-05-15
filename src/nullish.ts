{
// nullish coalescing operatorr
// null | undefined ---> decision making
// Decision will be made based on null and undefined
const isAuthenticated = null ;

const result1 = isAuthenticated ?? 'Guest'

type User = {
    name: string;
    address: {
        city: string;
        road:string;
        presentAddress: string;
        permanentAddress?: string;
    }
}

const user:User = {
    name: 'Shohidul',
    address: {
        city: 'mym',
        road: 'sankipara',
        presentAddress: 'mym town'
    }

}

// nullish operato ?? only works on null and undefined
// here permanent address found undefined , that's why we used nullish operator to show 'No permanent address'
const permanentAddress = user?.address?.permanentAddress ?? 'No permanent Address';

console.log(permanentAddress)


}