let acessos = ["Admin"]
let senhas = ["Admin"]

function pegarInfo(){
let acessoUsuario = document.getElementById("acessoInput").value
let senhaUsuario = document.getElementById("senhaInput").value
let tituloInicial = document.getElementById("tituloInicial")
let entrou = false

if(acessoUsuario == "" || senhaUsuario == ""){
    tituloInicial.textContent = "Preencha todos os campos"
}
else{ 
for(let i = 0; i <= acessos.length; i++){
    user = acessos[i]
    if(acessoUsuario == user){
        entrou = true
        alert("entrou parça")
        let senha = senhas[acessos.indexOf(acessoUsuario)]
        if(senha == senhaUsuario){
            alert("Voce entrou na pagina")
        }
        else{
            tituloInicial.textContent = "Senha incorreta"
        }
    }
}
if(entrou == false){
    tituloInicial.textContent = "O Usuario nao existe"
}}
}



function registrar(){
    window.location.href = "pagina.html";
}

function voltarAba(){
    window.location.href = "index.html";
    
}
function registerUser(){
    let primeiroAcesso = document.getElementById("primeiroAcesso").value
    let segundoAcesso = document.getElementById("segundoAcesso").value
    let primeiraSenha = document.getElementById("primeiraSenha").value
    let segundaSenha = document.getElementById("segundaSenha").value
    let aviso = document.getElementById("mudarTitulo")
    aviso.textContent = "Faça seu cadastro."

    if(primeiroAcesso == "" || segundoAcesso == "" || primeiraSenha == "" || segundaSenha == ""){
        aviso.textContent = "Voce precisa preencher todas as lacunas"
    }
    else if(primeiroAcesso != segundoAcesso){
        aviso.textContent = "Os acessos estão diferentes"
    }
    else{
        if(primeiraSenha != segundaSenha){
            aviso.textContent = "As senhas estão diferentes"
        }
        else{
            acessos.push(primeiroAcesso);
            senhas.push(primeiraSenha);
            voltarAba();
        }}}

function redirecionar() {
    window.location.href = "index.html";
    }
          