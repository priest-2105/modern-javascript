const content = document.querySelectorAll('p');

 
// content.classList.add('success');

content.forEach(p => {
    
   if ( p.innerText.includes('success') ) {

    p.classList.add('success');   

}if ( p.innerText.includes('error') ) {

    p.classList.add('error');   
   
}
});





// THANKS SHAUN !!