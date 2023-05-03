//diferença entre let/var/const

/*var nome = "Gabriel";

if(nome == "Gabriel"){
    let nome = "Denise";
}

console.log(nome);*/

//Recuperando um elemento button que esta no index.html

const btn = document.getElementById("meu-btn");

//atrelando um evento de click ao button que foi recuperado.
btn.addEventListener("click" , function(){
    
    //funcao matematica -math
    //random = gera numeros aleatorios entre 0 e 1
    //floor = arredonda o numero para baixo
    //ceil = arredonda o numero para cima
    //round = arredonda o numero para aleatoriamente

    let r,g,b;

    r = Math.round (Math.random() * 255);
    g = Math.round (Math.random() * 255);
    b = Math.round (Math.random() * 255);
    
    //adicionando um atributo ao elemento button

    this.setAttribute("style", `background-color:(rbg(${r},${g},${b});`);
    
});

//desafio
//Recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha.
//altere a cor de fundo e a cor do texto quando o evento ocorrer

//const tit = document.getElementById("meu-tit");

const tit = document.querySelector(".tit-sec:nth-child(2)");

console.log(tit)

tit.addEventListener("click" , function(){
    this.setAttribute("style", `background-color: red; color: white;`);
});

