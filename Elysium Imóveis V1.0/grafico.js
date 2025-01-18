// Investimentos


// Criar gráfico interativo usando Chart.js
var ctx = document.getElementById('fiiChart').getContext('2d');
var fiiChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico
    data: {
        labels: ['FII Imobiliário Alfa', 'FII Imobiliário Beta', 'FII Imobiliário Gamma', 'FII Imobiliário Delta', 'FII Imobiliário Epsilon'],
        datasets: [{
            label: 'Retorno do Investimento (%)',
            data: [8, 7.5, 9.3, 5.2, 6.8], // Percentuais de retorno
            backgroundColor: [
                'rgba(52, 152, 219, 0.6)', 
                'rgba(46, 204, 113, 0.6)', 
                'rgba(241, 196, 15, 0.6)', 
                'rgba(231, 76, 60, 0.6)', 
                'rgba(155, 89, 182, 0.6)'
            ],
            borderColor: [
                'rgba(52, 152, 219, 1)', 
                'rgba(46, 204, 113, 1)', 
                'rgba(241, 196, 15, 1)', 
                'rgba(231, 76, 60, 1)', 
                'rgba(155, 89, 182, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000, // Duração da animação
            easing: 'easeInOutQuart' // Tipo de animação
        },
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function(tooltipItem, data) {
                    return tooltipItem.yLabel + '%'; // Exibe a porcentagem no tooltip
                }
            }
        },
        onClick: function(e) {
            var activePoints = fiiChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
            if (activePoints.length > 0) {
                var firstPoint = activePoints[0];
                var label = fiiChart.data.labels[firstPoint.index];
                var value = fiiChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
                alert(`Fundo selecionado: ${label}\nRetorno: ${value}%`);
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%'; // Adiciona o símbolo de porcentagem
                    }
                }
            }
        }
    }
});
