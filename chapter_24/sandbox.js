// CallBacks and Foreach 

// const myFunc = (callbackFunc) => {
//     // do something 
//     let value = 50;
//     callbackFunc(value);
// };


// myFunc(value =>{
//     // do something 
//     console.log(value);
    
// })




let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];


const logPerson = (person,index) =>{
    console.log(`${index} - hello ${person}`);
    
}

people.forEach(logPerson)