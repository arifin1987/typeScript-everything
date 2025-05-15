// nullable types

const searchName = (value: string | null)=>{
    if(value){
        console.log('Searching')
    }else{
        console.log('there is nothing to search')
    }
}

searchName(null)