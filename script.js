let txt = document.getElementById('sobremim');
var imagens = ["imagens/Projetos/tarefa.png", "imagens/Projetos/cordel.png", "imagens/Projetos/form.png", "imagens/Projetos/login.png"];
var a = ["https://akiramath.github.io/Projeto-Tarefa/", "https://akiramath.github.io/Projeto-Cordel/", "https://akiramath.github.io/Formulario/", "https://akiramath.github.io/Pagina-de-login/"]
var titulos = ["Projeto de lista de Tarefas:", "Projeto Cordel:", "Projeto de Formulário", "Projeto de Login:"]
var ps = [ 
    `Desenvolver este projeto em JavaScript me permitiu aprofundar meus conhecimentos na linguagem, explorando recursos avançados, como filtros e opções de pesquisa. Além disso, aprendi a armazenar as tarefas localmente, oferecendo aos usuários a capacidade de salvar, excluir e editar suas tarefas. Foi uma experiência extremamente empolgante e valiosa do ponto de vista de aprendizado. Estou imensamente satisfeito por ter concluído esse projeto e orgulhoso do resultado alcançado.`,

    `Nesse projeto foi abordado o estudo do efeito Parallax, no qual criei um site com um poema onde as imagens mudam à medida que você rola a tela. Foi uma experiência fascinante e enriquecedora, proporcionando um aprendizado significativo nesse campo.`,

    `Utilizando meus conhecimentos, desenvolvi um projeto de formulário no qual explorei o uso de media queries para torná-lo responsivo. A experiência de trabalhar nesse projeto foi gratificante e me proporcionou um aprendizado significativo.`,

    ` Este projeto foi desenvolvido com base no meu aprendizado no curso de HTML e CSS do Curso em Vídeo. Foi abordado o estudo de media queries e sua aplicação prática, permitindo tornar o site responsivo em diferentes dispositivos, como computadores, televisores, tablets e smartphones. A experiência de participar desse projeto foi incrível e me proporcionou um aprendizado valioso.` ];

var idx = 0;


// botao sobre mim
function sobre(){
    if(txt.style.display == 'block'){
        txt.style.display = 'none';
    } else {
        txt.style.display = 'block';
    }
}

// projetos
function trocarAnterior() {
    if (idx > 0) {
      idx--;
    } else {
      idx = imagens.length - 1;
    }
    atualizarConteudo();
}

function trocarProxima() {
    if (idx < imagens.length - 1) {
      idx++;
    } else {
      idx = 0;
    }
    atualizarConteudo();
}

function atualizarConteudo() {
    var titulo = document.getElementById("titulo-proj");
    var imagem = document.getElementById("img");
    var descricao = document.getElementById("conteudo-proj");
    var ancoraImg = document.getElementById('a');
  
    ancoraImg.href = a[idx];
    titulo.textContent = titulos[idx];
    imagem.src = imagens[idx];
    descricao.textContent = ps[idx];
}

// função do hamburger
const itens = document.getElementById('itens');

function tamanhotela(){
  if(window.innerWidth >= 500){
    itens.style.display = 'block'
  }else{
    itens.style.display = 'none'
  }
}

function menu() {
  if(itens.style.display == 'none'){
    itens.style.display = 'block';
  }else{
    itens.style.display = 'none';
  }
}