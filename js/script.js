//diferença entre let/var/const

/*var nome = "Gabriel";

if(nome == "Gabriel"){
    let nome = "Denise";
}

console.log(nome);*/

//Recuperando um elemento button que esta no index.html

// const btn = document.getElementById("meu-btn");

// atrelando um evento de click ao button que foi recuperado.
// btn.addEventListener("click" , function(){
    
//     funcao matematica -math
//     random = gera numeros aleatorios entre 0 e 1
//     floor = arredonda o numero para baixo
//     ceil = arredonda o numero para cima
//     round = arredonda o numero para aleatoriamente

//     let r,g,b;

//     r = Math.round (Math.random() * 255);
//     g = Math.round (Math.random() * 255);
//     b = Math.round (Math.random() * 255);
    
//     adicionando um atributo ao elemento button

//     this.setAttribute("style", `background-color:(rbg(${r},${g},${b});`);
    
// });

// desafio
// Recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha.
// altere a cor de fundo e a cor do texto quando o evento ocorrer

// const tit = document.getElementById("meu-tit");

// const tit = document.querySelector(".tit-sec:nth-child(2)");

// console.log(tit)

// tit.addEventListener("click" , function(){
//     this.setAttribute("style", `background-color: red; color: white;`);
// });


//declarando um array

// let frutas = ["maçã", "laranja", "banana", "uva", "kiwi", "caqui"];
// console.log(frutas);

//verificar o tamanho do array

// console.log("tamanho do array: " + frutas.length);

//imprimindo um item especifico do array
// console.log("pegando itens do array: " + frutas [0]);
// console.log("pegando itens do array: " + frutas [1]);
// console.log("pegando itens do array: " + frutas [2]);
// console.log("pegando itens do array: " + frutas [3]);
// console.log("pegando itens do array: " + frutas [4]);
// console.log("pegando itens do array: " + frutas [5]);

//iterando o array com estruturas de repetição
//forEach
// frutas.forEach( (fruta)=>{

//     console.log("pegando itens do array: " + fruta);
// } );

//Adicionando um item ao final do array com o metodo push(item);

// frutas.push("melao");
// console.table(frutas);

//Adicionando um item ao inicio do array com o metodo unshift(item);

// frutas.unshift("melancia");
// console.table(frutas);

//removendo um item do final do array com o metodo pop();

// frutas.pop();
// console.table(frutas);

//removendo um item do inicio do array com o metodo shift();

// frutas.shift();
// console.table(frutas);

//localizando um determinado item dentro do array com o metodo indexOf(item);
// let indice = frutas.indexOf("banana");

// console.log("INDICE ONDE FOI LOCALIZADO O ITEM: " + indice);
// console.log("ITEM LOCALIZADO:  " + frutas[indice]);

//Utilizando os metodos splice(item, quantidadeRemocoes) para remover um item do array passando sua localização através do indice

// let indice = frutas.indexOf("banana");
// console.log("ITEM QUE ESTAVA NO LOCAL ANTES DA REMOCAO:  " + frutas[indice]);
// frutas.splice(indice, 2);
// console.table(frutas);
// console.log("ITEM QUE FICOU NO LOCAL APÓS A REMOÇÃO:  " + frutas[indice]);

// let nr1 = [1, 2, 3, 4, 5];
// let nr2 = [6, 7, 8, 9, 10];

// console.log(nr1);
// console.log(nr2);

// //concatenando arrays com o operador spread(...)
// let nr3 = [...nr1, ...nr2];

// nr3.forEach( (nr)=>{
//     console.log("ITEM NOVO DO ARRAY: "+nr)
// } );


//convertendo HTMLColections em arrays
const imgElements = document.getElementsByTagName("img");
// console.log(imgElements[0].src)

const imgElementsArray = [...imgElements];
imgElementsArray.forEach( (img)=>{
    console.log(img);
} );

//recupere uma colections de elementos do tipo (a).
//identifique  aqueles que são pertencentes somente ao cabecalho e adicione o atributo style com a propriedade background-color: #ff0000;
//tire uma print do codigo e da pagina alterada e envie no chat

const aElements = [...document.getElementsByTagName("a")];

aElements.forEach( (a)=>{

    let textA = a.textContent;
    if(textA == "Home" || textA == "Info" || textA == "Item-3"){
        a.setAttribute("style", "background-color:#ff0000");
    }
} );

