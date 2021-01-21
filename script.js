const header = document.getElementById('header')
const main = document.getElementById('main')
const setPhoto = document.querySelector('.setPhoto')
const menuTop = document.querySelectorAll('.menu-top')
const label = document.getElementById('label-claro')
const inputClaro = document.getElementById('input-claro')
const btnAzar = document.querySelector('.botao-azar-a')


function mudaCor () {
    if(main.id=="main") {
        header.setAttribute('id', 'header-escuro')
        main.setAttribute('id','main-escuro')
        setPhoto.setAttribute('src','img/loogle2.png')
        setPhoto.setAttribute('class','photo-transition')
        // menuTop.setAttribute('class', 'menu-top2')
        label.setAttribute('id','label-escuro')
        inputClaro.setAttribute('id', 'input-escuro')
        btnAzar.setAttribute('class', 'botao-azar-claro')
    }
    else {
        header.removeAttribute('id', 'header-escuro')
        main.removeAttribute('id','main-escuro')
        setPhoto.setAttribute('src','img/loogle1.png')
        // menuTop.setAttribute('class', 'menu-top2')
        label.setAttribute('id','label-claro')
        inputClaro.setAttribute('id', 'input-claro')
        btnAzar.setAttribute('class', 'botao-azar-a')
        main.setAttribute('id','main')
    }
    
}