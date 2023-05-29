let Users = [];
let Passwords = [];
function Logar() {
  const password = document.getElementById("senhaInput").value;
  const login = document.getElementById("acessoInput").value;
  const tituloInicial = document.querySelector(".titlezin");

  if (login === "" || password === "") {
    tituloInicial.textContent = "Preencha todos os campos";
  } else {
    // Recuperar os dados do Local Storage
    if (localStorage.hasOwnProperty("Users")) {
      Users = JSON.parse(localStorage.getItem("Users"));
      Passwords = JSON.parse(localStorage.getItem("Passwords"));
    }

    console.log(Users);

    const userIndex = Users.findIndex(obj => obj.login === login);

    if (userIndex === -1) {
      tituloInicial.textContent = "O usuário não existe";
    } else {
      const storedPassword = Passwords[userIndex].password;

      if (storedPassword === password) {
        tituloInicial.textContent = "Logado com sucesso";
      } else {
        tituloInicial.textContent = "Senha incorreta";
      }
    }
  }
}


function userRegister() {
  const login = document.getElementById("primeiroAcesso").value;
  const loginConfirm = document.getElementById("segundoAcesso").value;
  const password = document.getElementById("primeiraSenha").value;
  const passwordConfirm = document.getElementById("segundaSenha").value;
  const aviso = document.querySelector("#mudarTitulo");

  if (
    login == "" ||
    loginConfirm == "" ||
    password == "" ||
    passwordConfirm == ""
  ) {
    aviso.textContent = "Voce precisa preencher todas as lacunas";
  } else if (login != loginConfirm) {
    aviso.textContent = "Os acessos estão diferentes";
  } else if (password != passwordConfirm) {
    aviso.textContent = "As senhas estão diferentes";
  } else {
    if (localStorage.hasOwnProperty("Users") && localStorage.hasOwnProperty("Passwords")) {
      Users = JSON.parse(localStorage.getItem("Users"));
      Passwords = JSON.parse(localStorage.getItem("Passwords"));
    }

    Users.push({login});
    Passwords.push({password})
    localStorage.setItem("Users", JSON.stringify(Users));
    localStorage.setItem("Passwords", JSON.stringify(Passwords));
    console.log(Users);
    voltarAba();
  }
}

// Navigation
{
  function voltarAba() {
    window.location.href = "index.html";
  }
  function registrar() {
    window.location.href = "pagina.html";
  }
}
