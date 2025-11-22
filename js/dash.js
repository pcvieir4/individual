const ctx = document.getElementById("graficoQuiz");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: [
      "Personagens",
      "Naves",
      "Planetas",
      "A Força",
      "Cronologia"
    ],

    datasets: [
      {
        label: "Nível de Conhecimento",
        data: [70, 40, 55, 90, 35], // ← valores de exemplo (% de acertos)
        fill: true,
        backgroundColor: "rgba(255, 193, 7, 0.25)",
        borderColor: "rgba(255, 193, 7, 1)",
        pointBackgroundColor: "#ffbf00",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 10,
        borderWidth: 2,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        labels: {
          font: { size: 15, weight: "bold" },
          color: "#000",
        },
      },
    },

    scales: {
      r: {
        min: 0,
        max: 100, // porcentagem de acertos
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
          color: "#000",
          font: { size: 12 },
        },
        pointLabels: {
          color: "#000",
          font: { size: 15, weight: "bold" },
        },
        grid: { color: "rgba(0,0,0,0.15)" },
        angleLines: { color: "rgba(0,0,0,0.25)" }
      },
    },
  },
});
// Exemplo de jogadores (substitua pelos seus dados reais)
const jogadores = [
  { nome: "Pedro Vieira", pontos: 980 },
  { nome: "Lucas Quevedo", pontos: 870 },
  { nome: "Samara", pontos: 820 },
  { nome: "Arthur", pontos: 760 },
  { nome: "Ana Silva", pontos: 700 },
  { nome: "Gleison", pontos: 650 },
  { nome: "Erick", pontos: 560 }
];

// Ordena do maior para o menor
jogadores.sort((a, b) => b.pontos - a.pontos);

// Mantém apenas o TOP 5
const top5 = jogadores.slice(0, 5);

// Seleciona a UL do ranking
const lista = document.querySelector(".ranking-list");

// Limpa o conteúdo existente
lista.innerHTML = "";

// Insere automaticamente os 5 melhores
top5.forEach((jogador, index) => {
  lista.innerHTML += `
    <li>
      <span class="posicao 
        ${index === 0 ? "ouro" : index === 1 ? "prata" : index === 2 ? "bronze" : ""}
      ">
        ${index + 1}º
      </span>

      <p class="nome">${jogador.nome}</p>
      <span class="pontos">${jogador.pontos} pts</span>
    </li>
  `;
});

