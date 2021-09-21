document.addEventListener('DOMContentLoaded',()=>{
    menuHamburger();
    
});


const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.nav-links');
const main=document.querySelector('.main');
const body=document.querySelector('body');

function menuHamburger(){

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('active');
    main.classList.toggle('active');
    hamburger.classList.toggle('show');
})

}


