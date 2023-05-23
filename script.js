let acessos = ["Admin"]
let senhas = ["Admin"]

function pegarInfo() {
    let acessoUsuario = document.getElementById("acessoInput").value;
    let senhaUsuario = document.getElementById("senhaInput").value;
    let tituloInicial = document.getElementById("tituloInicial");
    let entrou = false;

    if (acessoUsuario === "" || senhaUsuario === "") {
        tituloInicial.textContent = "Preencha todos os campos";
    } else {
        // Recuperar os dados do Local Storage
        let primeiroAcesso = localStorage.getItem("primeiroAcesso");
        let primeiraSenha = localStorage.getItem("primeiraSenha");

        if (acessoUsuario === primeiroAcesso) {
            entrou = true;
            if (senhaUsuario === primeiraSenha) {
                window.location.href = "https://www.linkedin.com/in/natan-lucena-b46b3926a/";
            } else {
                tituloInicial.textContent = "Senha incorreta";
            }
        }

        if (entrou === false) {
            tituloInicial.textContent = "O usuário não existe";
        }
    }
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
            localStorage.setItem("primeiroAcesso", primeiroAcesso);
            localStorage.setItem("primeiraSenha", primeiraSenha);
            voltarAba();
        }}}

function redirecionar() {
    window.location.href = "index.html";
    }
          