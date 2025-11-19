function cadastrar() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmar").value;
  let erro = document.getElementById("erroCadastro");

  erro.innerHTML = "";

  if (!nome || !email || !senha || !confirmar) {
    erro.innerHTML = "Preencha todos os campos.";
    return;
  }

  if (senha !== confirmar) {
    erro.innerHTML = "As senhas não coincidem.";
    return;
  }

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}
