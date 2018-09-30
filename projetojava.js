function logon(){
    
    if ((login1.value == "admin") && (senha.value  == "admin")){
        logado.style.display = "flex";
        login.style.display = "none";

        
    }
}

let login = document.querySelector(".login");
let logado = document.querySelector(".logado");
let login1 = document.querySelector("#login1");
let senha = document.querySelector("#senha");
let botao = document.querySelector(".botao");
botao.onclick = logon;