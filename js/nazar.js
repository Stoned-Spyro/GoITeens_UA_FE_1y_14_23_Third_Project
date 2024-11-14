const toogleBurgerMenu = document.querySelector('.item__icon')
const burgerMenu = document.querySelector('.header__burgermenu')

toogleBurgerMenu.addEventListener('mouseover', function(event) {
    event.stopPropagation(); 
    burgerMenu.classList.add('active'); 
});

toogleBurgerMenu.addEventListener('mouseout', function(event) {
    burgerMenu.classList.remove('active'); 
});


