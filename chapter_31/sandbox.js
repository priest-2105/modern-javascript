//  Primitive Type

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo : ${scoreTwo}`);


scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo : ${scoreTwo}`);






// Reference Types 


const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;


console.log(userOne, userTwo);

// 
userTwo.age =  80;

console.log(userOne, userTwo);
