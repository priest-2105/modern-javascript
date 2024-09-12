

const linkEl = document.querySelector('a');


console.log(linkEl.getAttribute('href'));


linkEl.setAttribute('href', 'github.com');
linkEl.setAttribute('target', '_blank');
linkEl.innerText = 'my web'

const msgEl = document.querySelector('p');


console.log(msgEl.getAttribute('class'));
msgEl.setAttribute('class', 'success');
console.log(msgEl.getAttribute('class'));
msgEl.setAttribute('style', 'color:green')