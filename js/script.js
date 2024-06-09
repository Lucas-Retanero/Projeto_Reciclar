// botão menu

function navbar() {
    let menuMobile = document.querySelector('ul');

    if (menuMobile.classList.contains('clicado')) {
        menuMobile.classList.remove('clicado');
        document.querySelector('.menu-hamburguer').src = "./src/icons/menu-hamburguer.png"
        document.querySelector('.menu').classList.remove('fundo-verde');
    } else {
        menuMobile.classList.add('clicado');
        document.querySelector('.menu-hamburguer').src = "./src/icons/x.png"
        document.querySelector('.menu').classList.add('fundo-verde');
    }
}



//botão topo

const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 4;

function animaScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem - metadeWindow < 0;

    if(itemVisivel) {
        scrollAnima.classList.add('mostrar-botao');
    } else {
        scrollAnima.classList.remove('mostrar-botao');
    };

};

window.addEventListener('scroll', animaScroll)