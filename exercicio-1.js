const btnbackground = document.getElementById("btn-background");
const color1 = "#fff"
const color2 = "#2CD3A8"
let corPdr = color1;

btnbackground.addEventListener("click", function(){

    if (corPdr === color1) {
        document.body.setAttribute("style", "background-color: " + color2 + ";");
        corPdr = color2;
      }
    else {
        document.body.setAttribute("style", "background-color: " + color1 + ";");
        corPdr = color1;
      }
});

//========================

const btnchange = document.getElementById("btn-trocar")
const imagem = document.getElementById("imagem")
const primeiraImagem = "./img/lobo1.jpg";
const segundaImagem = "./img/lobo2.jpg";

btnchange.addEventListener("click", function() {
   
    if (imagem.getAttribute("src") == primeiraImagem){      
      imagem.setAttribute("src", segundaImagem);
    } else {    
      imagem.setAttribute("src", primeiraImagem);
    }
  });

//==========================

const btnmsg = document.getElementById("btn-msg");
const text = document.getElementById("text");

btnmsg.addEventListener("click", function() {
  text.textContent = "Texto modificado!";
});

//==========================

const btnocultar = document.getElementById("btn-ocultar");

btnocultar.addEventListener("click", function() {
    if(imagem.style.display == "none"){
        imagem.style.display = "block";
    }
    else{
        imagem.style.display = "none";
    }
});

//==========================


const msglbl = document.getElementById("msg-lbl");
const lista = document.getElementById("list");
const newItem = document.createElement('li');
const form = document.getElementById("form");

form.addEventListener("submit", function(){

    event.preventDefault();

    const novoTexto = document.createTextNode(msglbl.value);
    lista.appendChild(newItem);

    
});

