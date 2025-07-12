function checkAnswers() {
  let score = 0;
  const answers = {
    q1: 'c',
    q2: 'a',
    q3: 'b'
  };
  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }
  const result = document.getElementById('result');
  result.textContent = `You got ${score} out of 3 correct!`;
}
