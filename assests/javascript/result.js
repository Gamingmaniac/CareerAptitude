// result.js
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const scienceScore = parseInt(urlParams.get('science')) || 0;
    const artsScore = parseInt(urlParams.get('arts')) || 0;
    const commerceScore = parseInt(urlParams.get('commerce')) || 0;

    // Determine the maximum score
    const maxScore = Math.max(scienceScore, artsScore, commerceScore);
    let recommendations = [];

    // Check which streams have the maximum score
    if (scienceScore === maxScore) recommendations.push('Science');
    if (artsScore === maxScore) recommendations.push('Arts');
    if (commerceScore === maxScore) recommendations.push('Commerce');

    // Create a recommendation message
    let careerSuggestion;
    if (recommendations.length > 1) {
        // Randomly select one from the tied recommendations
        const randomIndex = Math.floor(Math.random() * recommendations.length);
        careerSuggestion = `We recommend pursuing a career in ${recommendations[randomIndex]}!`;
    } else {
        careerSuggestion = `We recommend pursuing a career in ${recommendations[0]}!`;
    }

    // Display the recommendation
    document.querySelector('.result-summary').innerHTML += `<p>${careerSuggestion}</p>`;

    // Create a graph using Chart.js (as before)
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Science', 'Arts', 'Commerce'],
            datasets: [{
                label: 'Interest Level',
                data: [scienceScore, artsScore, commerceScore],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
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
});