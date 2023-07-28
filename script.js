// funcao do header

let ind = document.getElementById('ind');
let a = document.querySelector('.links');

function mover(targetElement, targetPosition) {
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  ind.style.transform = `translateX(${targetPosition}px)`;

  //Arrumar o ind da experiencia
  if (targetPosition === 205) {
    ind.style.width = '95px';
  } else {
    ind.style.width = '90px';
  }

  //Arrumar para o modelo portatil

  if(window.innerWidth <= 600){
    let h = document.getElementById('a-home');
    let s = document.getElementById('a-sobre');
    let e = document.getElementById('a-exp');
    let p = document.getElementById('a-proj');

    if(targetPosition === 0){
      h.style.backgroundColor = 'rgb(36,31,33)'; s.style.backgroundColor = ''; e.style.backgroundColor = ''; p.style.backgroundColor = '';
      h.style.color = 'white';
    } else if( targetPosition === 90){
      h.style.backgroundColor = ''; s.style.backgroundColor = 'rgb(36,31,33)'; e.style.backgroundColor = ''; p.style.backgroundColor = '';
      h.style.color = '';
      
    } else if(targetPosition === 200){
      h.style.backgroundColor = ''; s.style.backgroundColor = ''; e.style.backgroundColor = 'rgb(36,31,33)';
      p.style.backgroundColor = '';
      h.style.color = '';
    } else if(targetPosition === 300){
      h.style.backgroundColor = ''; s.style.backgroundColor = ''; e.style.backgroundColor = '';
      p.style.backgroundColor = 'rgb(36,31,33)';
      h.style.color = '';
    }
  }

  // Adicione a classe "clicked" ao link clicado
  const links = document.getElementsByClassName('links');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('clicked');
  }
  event.target.classList.add('clicked');
}
  // funcao da experiência
  let p = document.getElementById('conteudo-txt');
  let h1 = document.getElementById('conteudo-h1');

function salesforce(){

    h1.innerHTML = 'Experiência com Salesforce:';
    p.innerHTML = 'Durante o meu tempo em cursos que concluí, adquiri conhecimentos sólidos em HTML, CSS e possuo um conhecimento básico de Javascript e Apex.<br><br> Há cerca de seis meses, comecei a estudar Salesforce na plataforma da Thailhead, consegui o nível de Ranger e estou cada vez mais aprofundando meus conhecimentos em Salesforce Admin e Developer. Concluí um curso de Salesforce Admin na MJV School em 2022, que durou três meses. Neste curso, tive a oportunidade de aplicar meus conhecimentos ao implementar o Salesforce em uma empresa fictícia. Participei ativamente de atividades como gestão de leads, filas, criação de um site simples com formulário para captura de leads, tarefas, fluxos, aprovação de oportunidades pelo gerente, utilização de fórmulas, criação de relatórios e painéis, além de trabalhar com objetos personalizados, regras de validação e hierarquia de papéis. Esse projeto foi extremamente gratificante e me permitiu um crescimento significativo em minhas habilidades.<br><br> Estou animado para aplicar meus conhecimentos de Salesforce e continuar a desenvolver minhas habilidades nessa área. Sou uma pessoa proativa e focada, sempre em busca de entregar o melhor resultado para a empresa e fazer parte de uma equipe de alto desempenho.</p>';
}

function frontEnd(){
    h1.innerHTML = 'Experiência com Front-End:';
    p.innerHTML = 'Faz 4 meses iniciei minha jornada como desenvolvedor front-end. Estou extremamente empolgado com o aprendizado que venho conquistando nesta área fascinante. Com a dedicação em cursos e muita prática, adquiri conhecimentos sólidos em HTML, CSS, JavaScript e até Python, proporcionando-me uma base diversificada para construir experiências digitais incríveis. <br><br> Durante essa jornada, não me limitei apenas à teoria, mas também me desafiei a colocar em prática o que aprendi. Concluir três projetos significativos que se encontram na próxima seção. Tenho um repositório no GitHub com outros trabalhos que demonstrei ao longo do meu aprendizado. Fique à vontade para dar uma olhada em <a href="https://github.com/akiramath?tab=repositories" target="_blank" style="color: rgb(190, 134, 157);">www.github.com.br/perfil.</a>, onde compartilho mais sobre a minha jornada de aprendizado e meu crescimento contínuo. <br><br>Acredito que o aprendizado é uma busca constante, e estou ansioso para enfrentar novos desafios. Meu objetivo agora é aplicar meus conhecimentos em projetos reais e aprender ainda mais com profissionais experientes em uma equipe colaborativa. Se você se identificou com meu perfil e projetos, ficarei muito feliz em fazer contato para discutir possíveis oportunidades de colaboração, eu prezo pelo comprometimento com a excelência em tudo o que faço, buscando criar interfaces atraentes, responsivas e altamente funcionais.';
}