const ctx = document.getElementById('grafico1');
const ctx2 = document.getElementById('grafico2'); 
let labels = []; // nomes dos carros 
let velocidade = []; // velocidade dos carros

// criar um for para extrair do banco de dados 

for(const [key, value] of dados) {
  labels.push(value[3]); 
  velocidade.push(value[4]); 

} // fim do for


// grafico 1 

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: ' Velocidade Máxima ',
        data: velocidade,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// grafico 2 

new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', ''],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

