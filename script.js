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