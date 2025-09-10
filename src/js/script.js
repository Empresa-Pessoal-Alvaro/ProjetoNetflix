// ARRAY DE OBJETOS COM AS IMAGENS E INFORMAÇÕES DO BANNER
const bannerItems = [
{
    image: "./src/assets/Game1.jpg",
    titulo: "Título do filme 1",
    descricao: "Filme 1" 
},
{
    image: "./src/assets/Game2.jpg",
    titulo: "Título do filme 2",
    descricao: "Filme 2" 
},
{
    image: "./src/assets/Game3.jpg",
    titulo: "Título do filme 3",
    descricao: "Filme 3" 
}
];

// DECLARANDO AS VARIÁVEIS E ELEMENTOS COM DOM (DOCUMENT OBJECT MODEL)
const tempo = 5000; // Tempo em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0; // Início da contagem das imagens

// FUNÇÃO PARA O SLIDESHOW

function slideShow(){
    //  ALTERA A IMAGEM DE FUNDO DO BANNER
    // `` - Template strings ou strings literais forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].image})`;
    // ALTERA O TÍTULO DO BANNER
    elementoTitulo.textContent = bannerItems[i].titulo;
    // ALTERA A DESCRIÇÃO
    elementoDescricao.textContent = bannerItems[i].descricao;

    // INCREMENTA O ÍNDICE (i) E REINICIA QUANDO CHEGAR NO FINAL DO ARRAY
    
    // se o i for maior que a quantidade de imagens, volta pro início
    i++;
    if (i >= bannerItems.length){
        i = 0;
    };
    // CHAMA A FUNÇÃO NOVAMENTE APÓS O TEMPO DEFINIDO
    setTimeout(slideShow, tempo);
}

// INICIA O SLIDESHOW DA FUNÇÃO
slideShow();