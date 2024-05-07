document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    const answers = ['b', 'b', 'a', 'a', 'b'];
    for (let i = 1; i <= 5; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[i - 1]) {
                score++;
            }
        }
    }
    document.getElementById('result').textContent = `You scored ${score} out of 5`;
});
