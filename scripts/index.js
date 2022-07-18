

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener('click', toggle);

function toggle (){
    const nav = document.querySelector(".navb");
    nav.classList.toggle('closenav');
    
}
