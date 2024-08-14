let radius = 10
const pi = 3.14


console.log(radius, pi);


// matth operators +, -, *,, / , **, %


console.log(10/2);

// let result = radius % 3;
// let result = pi * radius**2



// order of operation  - B I D M A S

// let result = 5 * (10 - 3)**2;

console.log(result);



// let likes = 10;

result = likes + 10;

likes++;
likes--;

result =likes += 10
like  -= 5;
likes *= 10;
likes /= 10;


console.log(likes);











// NAN - not a number

console.log(5 / 'Helo');
console.log(5 * 'Helo');


// let result = 'the blog has ' + likes + 'likes';

console.log(result);








// template string 


const title= 'Best reads of 2019';
const author = 'Matrio';
const likes = 30;



// concatenation Way 

let result = 'The Blog called ' + title + 'by ' + author + 'has ' + likes + 'likes';

console.log(result);


// template string way 

// let result = `The Blog called ${title} by ${author} has ${likes} likes  `
console.log(result);


// creating html templates 


let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span> This Blog has ${likes} likes</span>
`;

console.log(html);
