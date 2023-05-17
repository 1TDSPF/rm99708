// const usuario1 = {
//     usuarioNome : "jaul@email.com",
//     usuarioSenha : "12345",
//     usuarioGenero : "m",
//     gravarDados : true
// }

// const usuario2 = {
//     usuarioNome : "bkzin@email.com",
//     usuarioSenha : "12345",
//     usuarioGenero : "m",
//     gravarDados : true
// }

//gravar uma lista de objetos 
let listaDeUsuarios = [
    {
    nomeCompleto : "jau da selva",
    usuarioEmail : "jau@email.com",
    usuarioSenha : "123"
    },

    {
        nomeCompleto : "paulin bacana",
        usuarioEmail : "paulin@email.com",
        usuarioSenha : "123"
    },

    {
        nomeCompleto : "emoji nerdola",
        usuarioEmail : "emoji@email.com",
        usuarioSenha : "123"
    }
];

//ADICIONANDO A LISTA DE OBJETOS NO LOCAL STORAGE
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    
    const inputNome = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    if(evt.target.id == "btnSubmit"){
        


        try{
            
            listaDeUsuarios.forEach((usuario)=>{
    
                if(inputNome.value == usuario.usuarioNome && inputPass.value == usuario.usuarioSenha){
                    throw "VALIDADO";
                }  
            });
            throw "NÃO VALIDADO";
            
        }catch(msg){
            
            const msgStatus = document.querySelector("#msgStatus");

            if(msg == "VALIDADO"){
                msgStatus.setAttribute("style", "color: #00ff00;");
                msgStatus.innerHTML = "<span><strong>Login efetuado com suceeso!</strong></span>";
            }else{
                msgStatus.setAttribute("style", "color: #ff0000;");
                msgStatus.innerHTML = "<span><strong>Senha ou nome de usuario invalidos!</strong></span>";
            }

            console.log();
        }


        
    }
    else if(evt.target.className =="fa fa-eye" || evt.target.className =="fa fa-eye-slash"){
        console.log("Evento adicionado");
        if(inputPass.getAttribute("type") == "password"){
            inputPass.setAttribute("type", "text");
            evt.target.setAttribute("class", "fa fa-eye-slash");
        }else{
            inputPass.setAttribute("type", "password");
            evt.target.setAttribute("class", "fa fa-eye");
        }
    }
});

/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣶⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣶⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣤⣴⣤⣤⣤⣤⣤⣤⣤⣤⣶⣿⣟⣛⣛⣻⣟⣛⣁⣤⣤⣤⣤⣤⣤⣤⣤⣬⣿⣛⣛⣛⣛⣛⣿⣶⣤⣤⣤⣤⣤⣤⣤⣤⣤⣴
⠉⠛⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⡿⠿⠿⠿⢿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⡿⠛
⠀⠀⢸⣿⣿⠀⠀⠀⠀⠀⣀⣠⠤⢶⣤⣀⠀⠀⠀⠀⠀⣸⣿⣿⣿⡇⠀⠀⠀⠀⠘⣦⡄⠀⠀⢀⡀⠀⠀⠀⠀⢀⣿⣿⡇⠀
⠀⠀⠀⣿⣿⡄⠀⠀⠀⢀⠋⠈⠀⣨⣿⡏⢳⡀⠀⠀⢠⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⣹⢿⡀⠀⠀⠙⣦⠀⠀⠀⢸⣿⣿⠁⠀
⠀⠀⠀⢿⣿⣇⠀⠀⠀⣾⣀⠄⡐⣿⣿⣿⣸⡇⠀⠀⣾⣿⣿⣿⣿⣿⡆⠀⠀⣤⣴⣿⣼⣷⡄⡄⢀⣼⠀⠀⠀⢸⣿⡿⠀⠀
⠀⠀⠀⠘⣿⣿⡄⠀⠀⠙⢿⣀⣿⣿⣿⣿⠟⠀⠀⢸⣿⣿⡟⠻⣿⣿⣷⡀⠀⠈⢿⣿⣿⣿⣷⣧⡾⠃⠀⠀⢠⣿⣿⠇⠀⠀
⠀⠀⠀⠀⠹⣿⣿⣦⣀⠀⠀⠉⠛⠛⠉⠁⠀⣀⣴⣿⣿⠟⠀⠀⠘⢿⣿⣷⣄⠀⠀⠉⠙⠛⠋⠉⠀⠀⣠⣶⣿⡿⠋⠀⠀⠀	
⠀⠀⠀⠀⠀⣽⠻⢿⣿⣿⣶⣶⣶⣶⣶⣶⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⠛⢿⣿⣿⣷⣶⣶⣶⣶⣶⣾⣿⣿⡿⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢿⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⢲⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠲⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠐⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠖⠲⠶⢶⣶⣶⠖⠶⣿⣷⠂⠀⠀⠀⠀⠀⠀⠀⠀⣼⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠙⢻⡄⠀⠀⠀⠀⠀⠀⠀⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠹⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠶⠤⠤⠤⠤⠴⠾⠋⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢧⣄⣀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⣾⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠛⠛⠛⠛⠙⠉⠉⠀⠀⠀⠀
*/