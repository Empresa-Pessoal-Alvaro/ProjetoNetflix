// DECLARANDO AS VARIÁVEIS COM DOM (DOCUMENT MODEL OBJECT)
const carrosselLista = document.querySelector(".carrossel-lista");
const carrosselItem = document.querySelectorAll(".carrossel-item");
const botaoAnterior = document.getElementsByClassName("btn-anterior");
const BotaoProximo = document.getElementsByClassName("btn-proximo");

let contador = 0;

const larguraItem = carrosselItem[0].offsetWidth + 10; // largura do item + a margem
botaoProximo.addEventerListener("click", ()=>{
    if(contador < carrosselItem.length - 1){
        contador++;
        carrosselLista.style.transform = `translateX(-${contador * larguraItem}px)`;
    }
})

botaoAnterior.addEventerListener("click", ()=>{
    if(contador > 0){
        contador--;
        carrosselLista.style.transform = `translateX(-${contador * larguraItem}px)`;
    }
})