// botão menu

function navbar() {
    let menuMobile = document.querySelector('nav');

    if (menuMobile.classList.contains('clicado')) {
        menuMobile.classList.remove('clicado');
        document.querySelector('.menu-hamburguer').src = "./src/icons/menu-hamburguer.png"
    } else {
        menuMobile.classList.add('clicado');
        document.querySelector('.menu-hamburguer').src = "./src/icons/x.png"
    }
}






// const navbar = document.querySelector('.menu').addEventListener('click', function()){
//     navbar.classList.add('clicado');
// }









//botão topo

const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 4;

function animaScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem - metadeWindow < 0;

    if(itemVisivel) {
        scrollAnima.classList.add('show-button');
    } else {
        scrollAnima.classList.remove('show-button');
    };

};

window.addEventListener('scroll', animaScroll)