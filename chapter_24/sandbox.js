// CallBacks and Foreach 

const myFunc = (callbackFunc) => {
    // do something 
    let value = 50;
    callbackFunc(value);
};


myFunc(function(value){
    // do something 
    console.log(value);
    
})


// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];