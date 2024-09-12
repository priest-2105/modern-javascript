// const paraEl = document.querySelector('p');


// paraEl.innerText =  ' ninjas are awesome' ;
// console.log(paraEl.innerText);


const parasEl = document.querySelectorAll('p');

console.log(parasEl);


// parasEl.forEach(para => {
//     console.log(para.innerText);
//     para.innerText = 'New text';
// })


const content = document.querySelector('.content');

content.innerHTML = '<h2>New Content</h2>';

console.log(content.innerHTML);
