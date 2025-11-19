function fazerLogin() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let erro = document.getElementById("erroLogin");

  erro.innerHTML = "";

  if (usuario === "" || senha === "") {
    erro.innerHTML = "Preencha todos os campos!";
    return;
  }

  if (usuario === "yoda" && senha === "força123") {
    window.location.href = "../index.html";
  } else {
    erro.innerHTML = "Usuário ou senha incorretos.";
  }
}
