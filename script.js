let Users = [];

function Logar() {
  const password = document.getElementById("senhaInput").value;
  const login = document.getElementById("acessoInput").value;

  if (login === "" || password === "") {
    tituloInicial.textContent = "Preencha todos os campos";
  } else {
    // Recuperar os dados do Local Storage
    if (localStorage.hasOwnProperty("Users")) {
      Users = JSON.parse(localStorage.getItem("Users"));
    }

    console.log(Users)

    const loginSearch = Users.some((objeto) => {
      // Verificar se a string está presente em algum atributo do objeto
      return Object.values(objeto).some((valor) => {
        if (typeof valor === "string" && valor.includes(login)) {
          return true; // A string foi encontrada
        }
        return false; // A string não foi encontrada neste atributo do objeto
      });
    });

    const passwordSearch = Users.some((objeto) => {
      // Verificar se a string está presente em algum atributo do objeto
      return Object.values(objeto).some((valor) => {
        if (typeof valor === "string" && valor.includes(password)) {
          return true; // A string foi encontrada
        }
        return false; // A string não foi encontrada neste atributo do objeto
      });
    });



    if (loginSearch === false) {
      tituloInicial.textContent = "O usuário não existe";
    }

    if(loginSearch === true && passwordSearch === false) {
      tituloInicial.textContent = "Senha Incorreta"
    }

    if(loginSearch === true && passwordSearch === true) {
      tituloInicial.textContent = "Logado com sucesso"
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
    if (localStorage.hasOwnProperty("Users")) {
      Users = JSON.parse(localStorage.getItem("Users"));
    }

    Users.push({ login, password });

    localStorage.setItem("Users", JSON.stringify(Users));

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
