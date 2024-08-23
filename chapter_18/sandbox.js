// Variable and Block Scope 

let age = 30;


if(true){

  let age = 40;  
  let name = 'shawn'
    console.log('inside 1ts code block', age, name);
 
    if (true){
        console.log('inside 2nd code block', age);
        
    }

}


console.log('outside code block', age, name);
 