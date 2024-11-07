const toogleBurgerMenu = document.querySelector('.item__icon')
const burgerMenu = document.querySelector('.header__burgermenu')

toogleBurgerMenu.addEventListener('click', function(event) {
    event.stopPropagation(); 
   burgerMenu.classList.toggle('active'); 
});