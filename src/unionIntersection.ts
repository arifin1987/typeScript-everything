{

// Union types
type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
type FullStackdDeveloper = 'frontEndDeveloper' | 'expertDeveloper'

type developer = FrontendDeveloper | FullStackdDeveloper

const newDeveloper: FrontendDeveloper = 'juniorDeveloper'


type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bloodGroup : 'O+' | 'A+'| 'B+'
}

const user1:User ={
    name: 'Shohidul',
    gender: 'male',
    bloodGroup: 'O+'

}

// Intersection Types
type FrontEndDev = {
    skills: string[];
    designation1: 'FrontEnd Dev'
}
type BackEndDev = {
    skills: string[];
    designation2: 'Backend Dev'
}

type FullStackDev = FrontEndDev & BackEndDev;

const fullStackDev : FullStackDev = {
    skills:['HTML', 'CSS', 'Express'],
    designation1: 'FrontEnd Dev',
    designation2: 'Backend Dev'
}



}