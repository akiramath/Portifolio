let text = document.getElementById('titulo');
let mon1 = document.getElementById('fundoMD');
let mon2 = document.getElementById('fundoME');
let fundo = document.getElementById('fundo');

let login = document.getElementById('login');
let cordel = document.getElementById('cordel');
let form = document.getElementById('form');

//função de mover das montanhas
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    fundo.style.marginRight = value / '30.0' + '%';
    text.style.marginTop = value + 'px';
    mon1.style.marginRight = value / '35.0' + '%';
    mon2.style.marginLeft = value / '35.0' + '%';
})

//função magnética dos projetos
login.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let loginWidth = login.clientWidth;
    let loginHeight = login.clientHeight;
    let moveX = (x - loginWidth/2);
    let moveY = (y - loginHeight/2);
    login.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
})

login.addEventListener('mouseout', (e) => {
    login.style.transform = ``;
})

cordel.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let cordelWidth = cordel.clientWidth;
    let cordelHeight = cordel.clientHeight;
    let moveX = (x - cordelWidth/2);
    let moveY = (y - cordelHeight/2);
    cordel.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
})

cordel.addEventListener('mouseout', (e) => {
    cordel.style.transform = ``;
})

form.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let formWidth = form.clientWidth;
    let formHeight = form.clientHeight;
    let moveX = (x - formWidth/2);
    let moveY = (y - formHeight/2);
    form.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
})

form.addEventListener('mouseout', (e) => {
    form.style.transform = ``;
})

//função do hambúrguer
function clickMenu(){
    if ( itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

function mudou(){
    if (window.innerWidth >= 600){
        itens.style.display = 'flex';
    } else {
        itens.style.display = 'none';
    }
}