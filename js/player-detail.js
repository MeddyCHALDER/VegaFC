```javascript
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    feather.replace();
    
    // Radar Chart
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['Vitesse', 'Tir', 'Passe', 'Dribble', 'Physique', 'Défense'],
            datasets: [{
                label: 'Profil',
                data: [82, 78, 85, 74, 68, 62],
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                pointRadius: 4
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });

    // Form Chart
    const formCtx = document.getElementById('formChart').getContext('2d');
    const formChart = new Chart(formCtx, {
        type: 'line',
        data: {
            labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6'],
            datasets: [{
                label: 'Note',
                data: [7.5, 8.2, 8.8, 7.9, 8.5, 9.0],
                fill: false,
                backgroundColor: 'rgba(79, 70, 229, 1)',
                borderColor: 'rgba(79, 70, 229, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    min: 5,
                    max: 10
                }
            }
        }
    });
});
```