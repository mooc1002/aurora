const menu = document.querySelector('.sp-nav');
const bar = document.querySelectorAll('.bar');
const headNav = document.querySelector('.header-nav');

menu.addEventListener('click', function() {
    for(let i = 0; i < bar.length; i++){
        bar[i].classList.toggle('cross');
    }

    headNav.classList.toggle('show');
})