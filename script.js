const quizData = [
  {
    question: "На одном сайте просто показывают, сколько времени ты на нём провёл.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "Да, например сервисы вроде 'How Much Do I Scroll' или 'Your Time' показывают статистику времени на сайте."
  },
  {
    question: "Есть сайт, где вместо текста — только коты.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "Да, например сайт cats.com или сервисы с картинками котиков без текста."
  }
];

let currentQuiz = 0;
let score = 0;

const quizEl = document.getElementById("quiz-content");

function loadQuiz() {
  const { question, options } = quizData[currentQuiz];
  quizEl.innerHTML = `
    <div class="question">${question}</div>
    <div class="options">
      ${options.map(option => `
        <button onclick="selectAnswer('${option}')">${option}</button>
      `).join("")}
    </div>
    <div class="score">Вопрос ${currentQuiz + 1} из ${quizData.length}</div>
  `;
}

function selectAnswer(answer) {
  const current = quizData[currentQuiz];
  const correct = current.answer;
  const explanation = current.explanation;

  const buttons = quizEl.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === answer && answer !== correct) {
      btn.classList.add("wrong");
    }
  });

  if (answer === correct) score++;

  // Показываем пояснение и кнопку
  const explanationEl = document.createElement("div");
  explanationEl.classList.add("explanation");
  explanationEl.innerHTML = `
    <p><strong>Пояснение:</strong> ${explanation}</p>
    <button onclick="nextQuestion()" class="next-btn">Следующий вопрос</button>
  `;

  quizEl.appendChild(explanationEl);
}

function nextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.innerHTML = `
    <div class="result">
      Твой результат: ${score} из ${quizData.length}<br><br>
      <button onclick="restartQuiz()" style="padding:10px 20px; background:#00cc66; color:#fff; border:none; border-radius:10px;">Играть снова</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuiz = 0;
  score = 0;
  loadQuiz();
}

loadQuiz();