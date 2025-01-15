var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navlinks');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active-hamburger')
})