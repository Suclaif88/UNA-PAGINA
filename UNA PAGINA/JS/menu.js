(function(){
    const openButton = document.querySelector('.navbar__menu');
    const menu = document.querySelector('.navbar__enlace');
    const closeMenu = document.querySelector('.navbar__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('navbar__enlace--mostrar');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('navbar__enlace--mostrar');
    });

    


})();