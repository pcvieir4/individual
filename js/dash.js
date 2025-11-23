// -------------------------
// CARREGAR RESULTADO DO QUIZ DO LOCALSTORAGE
// -------------------------
const resultadoQuiz =
  JSON.parse(localStorage.getItem("resultadoQuizStarWars")) || null;

let radarData = [0, 0, 0, 0, 0]; // fallback vazio

if (resultadoQuiz) {
  radarData = [
    resultadoQuiz.categorias.personagens,
    resultadoQuiz.categorias.naves,
    resultadoQuiz.categorias.planetas,
    resultadoQuiz.categorias.forca,
    resultadoQuiz.categorias.cronologia,
  ];
}
const ctx = document.getElementById("graficoQuiz");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["Personagens", "Naves", "Planetas", "A Força", "Cronologia"],
    datasets: [
      {
        label: "Conhecimento por Categoria",
        data: radarData,
        fill: true,
        backgroundColor: "rgba(255, 191, 0, 0.25)",
        borderColor: "rgba(255, 191, 0, 1)",
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
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#000",
        },
        pointLabels: {
          color: "#000",
          font: {
            size: 15,
            weight: "bold",
          },
        },
        grid: { color: "rgba(0,0,0,0.15)" },
        angleLines: { color: "rgba(0,0,0,0.25)" },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: { size: 14, weight: "bold" },
          color: "#000",
        },
      },
    },
  },
});

// -------------------------
// MONTAR RANKING TOP 5
// -------------------------
const rankingGeral =
  JSON.parse(localStorage.getItem("rankingQuizStarWars")) || [];

const rankingList = document.querySelector(".ranking-list");
rankingList.innerHTML = "";

// Top 5
rankingGeral.slice(0, 5).forEach((jogador, index) => {
  rankingList.innerHTML += `
    <li>
      <span class="posicao ${
        index === 0
          ? "ouro"
          : index === 1
          ? "prata"
          : index === 2
          ? "bronze"
          : ""
      }">${index + 1}º</span>

      <p class="nome">${jogador.nome}</p>
      <span class="pontos">${jogador.pontos} pts</span>
    </li>
  `;
});
