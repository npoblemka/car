const btnMenu = document.querySelector('.button__list');
const menu = document.querySelector('.nav-main__list');
const btnPrimary = document.querySelector('.btn-primary');
const footerList = document.querySelectorAll('.footer-nav__list');
const footerTitle = document.querySelectorAll('.footer-nav__header');


btnMenu.addEventListener('click', function(){
    menu.classList.toggle('nav-main__list--open');
    btnPrimary.classList.toggle('header__btn--open');
});



for (let i = 0; i < footerTitle.length; i++) {
    for (let i = 0; i < footerList.length; i++) {    
        footerTitle[0].addEventListener('click', function(){
            footerList[0].classList.toggle('footer-list--active')
        })
        footerTitle[1].addEventListener('click', function(){
            footerList[1].classList.toggle('footer-list--active')
        })
        footerTitle[2].addEventListener('click', function(){
            footerList[2].classList.toggle('footer-list--active')
        })
    }

}



