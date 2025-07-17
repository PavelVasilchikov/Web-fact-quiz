const quizData = [
  {
    question:
      "«Deep web»: Глубокиb интернет больше обычного веба в более чем 400-500 раз.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
  },
  {
    question:
      "Microsoft когда-то спасла Apple от банкротства.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
  },
  {
    question:
      "Около 80% всего интернет-трафика генерируется ботами.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
  },
  {
    question:
      "GitHub хранит около 21 ТБ open-source кода в арктическом хранилище на случай апокалипсиса",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
  },
  {
    question:
      "В среднем Пробел проходит 10 км при нажатиях за 1 год.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
  },
  {
    question:
      "Первый в мире сайт до сих пор работает.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
  },
  {
    question:
      "Есть ссылка длиной больше 2000 символов.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
  },
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