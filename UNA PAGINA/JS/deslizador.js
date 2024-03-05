(function(){
    
    const sliders = [...document.querySelectorAll('.qsomos__cuerpo')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentqsomos = document.querySelector('.qsomos__cuerpo--mostrar').dataset.id;
        value = Number(currentqsomos);
        value+= add;


        sliders[Number(currentqsomos)-1].classList.remove('qsomos__cuerpo--mostrar');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('qsomos__cuerpo--mostrar');

    }

})();