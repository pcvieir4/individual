// Variáveis principais
var pontos = 0;
var vidas = 3;
var mensagem = document.getElementById("mensagem");
var spanPontos = document.getElementById("pontos");
var spanVidas = document.getElementById("vidas");
var falcon = document.getElementById("falcon");
var tie = document.getElementById("tie");

// Função principal
function atacar() {
  // efeito de ataque
  falcon.classList.add("attack");
  setTimeout(() => falcon.classList.remove("attack"), 200);

  // sorteia número de 1 a 10
  var sorteio = Math.floor(Math.random() * 10) + 1;

  if (sorteio <= 6) {
    // acertou o inimigo
    pontos = pontos + 10;
    mensagem.innerHTML = "💥 Você destruiu um TIE Fighter!";
    tie.classList.add("hit"); // animação inimigo atingido
    setTimeout(() => tie.classList.remove("hit"), 300);
  } 
  else if (sorteio <= 9) {
    mensagem.innerHTML = "💨 O inimigo desviou do seu tiro!";
  } 
  else {
    vidas = vidas - 1;
    mensagem.innerHTML = "⚠️ Você foi atingido!";
    falcon.classList.add("hit"); // animação de dano
    setTimeout(() => falcon.classList.remove("hit"), 300);
  }

  // atualiza HUD
  spanPontos.innerHTML = pontos;
  spanVidas.innerHTML = vidas;

  // condições de vitória e derrota
  if (pontos >= 100) {
    mensagem.innerHTML = "🏆 Vitória! A Rebelião venceu a batalha!";
    desativarBotoes();
  } else if (vidas <= 0) {
    mensagem.innerHTML = "☠️ Derrota! A Estrela da Morte venceu...";
    desativarBotoes();
  }
}

// Desativa botões
function desativarBotoes() {
  var botoes = document.getElementsByTagName("button");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].disabled = true;
  }
}

// Reinicia jogo
function reiniciar() {
  pontos = 0;
  vidas = 3;
  mensagem.innerHTML = "";
  spanPontos.innerHTML = pontos;
  spanVidas.innerHTML = vidas;

  var botoes = document.getElementsByTagName("button");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].disabled = false;
  }
}
