let Users = [];
let Passwords = [];
function Logar() {
  const password = document.getElementById("senhaInput").value;
  const login = document.getElementById("acessoInput").value;
  const tituloInicial = document.querySelector(".titlezin");

  if (login === "" || password === "") {
    alert("Preencha todos os campos");
  } else {
    // Recuperar os dados do Local Storage
    if (localStorage.hasOwnProperty("Users")) {
      Users = JSON.parse(localStorage.getItem("Users"));
      Passwords = JSON.parse(localStorage.getItem("Passwords"));
    }

    console.log(Users);

    const userIndex = Users.findIndex((obj) => obj.login === login);

    if (userIndex === -1) {
      alert("O usuário não existe");
    } else {
      const storedPassword = Passwords[userIndex].password;

      if (storedPassword === password) {
        alert("Logado com sucesso");
      } else {
        alert("Senha incorreta ou usuario incorreto");
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
    alert( "Voce precisa preencher todas as lacunas");
  } else if (login != loginConfirm) {
    alert("Os acessos estão diferentes");
  } else if (password != passwordConfirm) {
    alert("As senhas estão diferentes");
  } else {
    if (
      localStorage.hasOwnProperty("Users") &&
      localStorage.hasOwnProperty("Passwords")
    ) {
      Users = JSON.parse(localStorage.getItem("Users"));
      Passwords = JSON.parse(localStorage.getItem("Passwords"));
    }
    let userFinder = Users.findIndex((obj) => obj.login === loginConfirm);

    if (userFinder != -1) {
      alert("Esse usuario já existe");
    }
    else{
      Users.push({ login });
      Passwords.push({ password });
      localStorage.setItem("Users", JSON.stringify(Users));
      localStorage.setItem("Passwords", JSON.stringify(Passwords));
      console.log(Users);
      voltarAba();
    }
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
