function checkAnswers() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;

    if (q1 === 'b') {
        score++;
    }

    if (q2 === 'b') {
        score++;
    }

    document.getElementById('result').innerHTML = 'Ваш результат: ' + score + '/2';
}