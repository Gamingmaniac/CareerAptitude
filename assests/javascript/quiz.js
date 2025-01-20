// quiz.js
document.getElementById('quizForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    let scienceScore = 0;
    let artsScore = 0;
    let commerceScore = 0;

    // Calculate scores based on selected answers
    for (let i = 1; i <= 15; i++) {
        const selected = document.querySelector(`input[name="preference${i}"]:checked`);
        if (selected) {
            switch (selected.value) {
                case 'Science':
                    scienceScore++;
                    break;
                case 'Arts':
                    artsScore++;
                    break;
                case 'Commerce':
                    commerceScore++;
                    break;
            }
        }
    }

    // Redirect to results page with scores
    window.location.href = `results.html?science=${scienceScore}&arts=${artsScore}&commerce=${commerceScore}`;
};