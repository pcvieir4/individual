// Dados dos filmes (pode trocar pelos que quiser)
const filmes = [
  { titulo: "A New Hope", data: "25/05/1977", diretor: "George Lucas", ep: 4 },
  {
    titulo: "Return of the Jedi",
    data: "25/05/1983",
    diretor: "Richard Marquand",
    ep: 6,
  },
  {
    titulo: "The Phantom Menace",
    data: "19/05/1999",
    diretor: "George Lucas",
    ep: 1,
  },
  {
    titulo: "Attack of the Clones",
    data: "16/05/2002",
    diretor: "George Lucas",
    ep: 2,
  },
  {
    titulo: "Revenge of the Sith",
    data: "19/05/2005",
    diretor: "George Lucas",
    ep: 3,
  },
  {
    titulo: "The Force Awakens",
    data: "18/12/2015",
    diretor: "J. J. Abrams",
    ep: 7,
  },
];

// Preencher tabela
const tbody = document.getElementById("tbody-filmes");
filmes.forEach((filme) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${filme.titulo}</td>
    <td>${filme.data}</td>
    <td>${filme.diretor}</td>
    <td>${filme.ep}</td>
  `;

  tbody.appendChild(tr);
});

// Gráfico de pizza com Chart.js
const ctx = document.getElementById("chartBilheteria").getContext("2d");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "The Force Awakens",
      "The Last Jedi",
      "The Rise of Skywalker",
      "Rogue One",
      "Revenge of the Sith",
    ],
    datasets: [
      {
        data: [2068, 1333, 1074, 1056, 868], // valores fictícios de bilheteria
        backgroundColor: [
          "#0ea5e9",
          "#f97316",
          "#22c55e",
          "#eab308",
          "#6366f1",
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 14,
          font: {
            size: 11,
          },
        },
      },
    },
  },
});
