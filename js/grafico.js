// ==================== CAIXA DE GRAFICO DE CONSUMO MENSAL ====================
const cxConsumo = document.getElementById('chartConsumo');
const chtConsumo = new Chart(cxConsumo, {
  
  data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
      {
        type: 'bar',
          label: 'Consumo (kwh)',
          data: [222.6, 194.88, 169.68, 224.95, 224.28, 293, 100, 199, 293, 295, 212, 293],
          backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
              'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
      },
      ]
  },

  options: {
      scales: {
          y: {
              beginAtZero: true,
              title: { text: 'Consumo (kwh)', display: true },
            },
          x: {
              beginAtZero: true,
              title: { text: 'Mês', display: true },
            },
      },
      responsive: true,
      plugins: {
        
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Consumo mensal (kwh)',
          align: 'center',
              // padding: {
              //   align: 'start',
              //     top: 10,
              //     bottom: 30}
        }
      },

  }
});
// ==================== CAIXA DE GRAFICO DE NÍVEL DE TENSÃO X CORRENTE ====================
const cxTensao = document.getElementById('chartNivelTensao');
const chtTensao = new Chart(cxTensao, {
  
  data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
      {
        type: 'line',
          label: 'Tensão (V)',
          data: [220, 219, 213, 215, 212, 213, 220, 219, 213, 215, 212, 213],
          backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
              'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
      },
      {
        type: 'bar',
          label: 'Corrente (A)',
          data: [20, 19, 13, 15, 12, 13, 20, 19, 13, 15, 12, 13],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
      },
      {
        type: 'line',
          label: 'Tensão Máxima (V)',
          data: [240,240,240,240,240,240,240,240,240,240,240,240],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
          ],
          // borderWidth: 1,
          lineWidth: 10,

      },
      ]
  },

  options: {
      scales: {
          y: {
              beginAtZero: true,
              title: { text: 'Nível de Tensão/Corrente', display: true },
            },
          x: {
              beginAtZero: true,
              title: { text: 'Mês', display: true },
            },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Nível de Tensão x Corrente diários',
          align: 'center',
              // padding: {
              //   align: 'start',
              //     top: 10,
              //     bottom: 30}
        }

      },


  }
});

// ==================== CAIXA DE GRAFICO DE NÍVEIS DO FATOR DE POTENCIA ====================
const cxFatorPot = document.getElementById('chartFatorPot');
const chtFatorPot = new Chart(cxFatorPot, {
  
  data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
      {
        type: 'bar',
          label: 'Fator de Potencia (%)',
          data: [100, 100, 100, 95, 92, 93, 100, 99, 93, 95, 92, 93],
          backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
              'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
      },
      ]
  },

  options: {
      scales: {
          y: {
              beginAtZero: true,
              title: { text: 'Fator de Potencia (%)', display: true },
            },
          x: {
              beginAtZero: true,
              title: { text: 'Mês', display: true },
            },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Fator de Potência diário (%)',
          align: 'center',
              // padding: {
              //   align: 'start',
              //     top: 10,
              //     bottom: 30}
        }
      },

  }
});