// Criação do hamburguer
// Captura o botão e o menu 
const botao = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

// Cria o evento de clique 
botao.addEventListener('click', () => { //Clique
    //Ativa e desativa a classe aberto (usando: toggle)
    menu.classList.toggle('aberto'); //abre o hamburguer com a classe aberto exibindo a lista
});