// var aux = true;
// var botao1 = document.getElementById("help_button");
// var botao2 = document.getElementById("close_button");
// var chat = document.getElementById("chat");
// var altura = window.innerHeight
// verifica_altura(altura)
// window.addEventListener('resize', () => {
//     verifica_altura(altura)
// })
// botao1.addEventListener('click', () => {
//     acoes(aux);
// })
// botao2.addEventListener('click', () => {
//     acoes(aux);
// })
// function verifica_altura(alt) {
//     if (window.innerWidth <= 580) {
//         document.getElementById('chat').style.height = altura + 'px';
//     } else {
//         document.getElementById('chat').style.height = '23rem';
//     }
// }
// function acoes(acoe) {
//     if (acoe) {
//         chat.style.display = 'block';
//         aux = false;
//     }
//     else {
//         chat.style.display = 'none';
//         aux = true;
//     }
//     return aux
// }
var divElement = document.createElement("div");

// Defina o estilo da div com fundo preto
divElement.style.width = "200px";
divElement.style.height = "200px";
divElement.style.backgroundColor = "black";

// Adicione a div ao corpo do documento
document.body.appendChild(divElement);
