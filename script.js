const quizData = [
  {
    question:
      "Все сайты в интернете можно открыть одновременно, и они поместятся на один монитор.",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "В интернете более 1.2 млрд сайтов. Даже если по 1 пикселю — это планета размером с Землю.",
  },
  {
    question:
      "«Deep web»: Глубокий интернет больше обычного веба в более чем 400-500 раз.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "И это не только темные рынки; это огромные базы данных, архивы и прочие скрытые ресурсы.",
  },
  {
    question: "Microsoft когда-то спасла Apple от банкротства.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "Microsoft инвестировала в Apple $150 миллионов в 1997 году.",
  },
  {
    question: "Самый долгоживущий баг в истории IT длился 72 года",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Хотя баги могут жить десятилетиями (как Y2K), 72 года — это перебор. Но в legacy-коде всё возможно!",
  },
  {
    question: "Около 80% всего интернет-трафика генерируется ботами.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "Это может быть искусственный интеллект, поисковые роботы или даже вредные боты.",
  },
  {
    question:
      "GitHub хранит около 21 ТБ open-source кода в арктическом хранилище на случай апокалипсиса",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "Сотрудники проекта уверены, что эта информация позволит будущим поколениям восстановить часть технологий. Технология хранения данных рассчитана на более чем тысячу лет.",
  },
  {
    question: "Аниме - класс",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "Федя, ты не прав.",
  },
  {
    question: "`NaN` означает 'Nice and Neat'",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation: "На самом деле — 'Not a Number'. Но было бы веселее!",
  },
  {
    question: "Facebook хранит резервные копии данных в старых кассетах VHS",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Они используют магнитные ленты (как и Google), но VHS — это слишком даже для них.",
  },
  {
    question: "В среднем Пробел проходит 10 км при нажатиях за 1 год.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "Пробел - самая популярная клавиша.",
  },
  {
    question: "В Tesla используют JavaScript для программирования автопилота",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Автопилот Tesla работает на Python и C++. Хотя представьте alert('Вы врезаетесь!') вместо экстренного торможения!",
  },
  {
    question: "Первый в мире сайт до сих пор работает.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "Это http://info.cern.ch",
  },
  {
    question:
      "В Кремниевой долине есть закон, обязывающий IT-компании держать в офисах котов",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Хотя многие компании действительно заводят офисных котов (например, в Google), это не закреплено законодательно. Но отличная инициатива!",
  },
  {
    question: "Первый компьютерный 'баг' был реальным насекомым",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "В 1947 году мотыльк застрял в реле компьютера Harvard Mark II. Грейс Хоппер приклеила его в журнал с подписью 'First actual case of bug being found'.",
  },
  {
    question: "Есть ссылка длиной больше 2000 символов.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "В ней — целый JSON-объект, закодированный в URL.",
  },
  {
    question: "Большинство программистов знает, как готовить безе",
    options: ["Правда", "Точно правда"],
    answer: "Точно правда",
    explanation: "Берем 2 охлажденных яйца..",
  },
  {
    question: "Первый в мире смайлик выглядел так: :-)",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "В 1982 году Скотт Фалман предложил :-) для обозначения шуток в переписке.",
  },
  {
    question: "Веб-камера изобретена для наблюдения за кофемашиной.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "В 1991 году учёные Кембриджа подключили камеру к кофеварке, чтобы не ходить к ней попусту.",
  },
  {
    question: "Язык Python назван в честь змеи.",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Гвидо ван Россум назвал его в честь шоу Monty Python’s Flying Circus.",
  },
  {
    question: "Пароль '123456' взламывают за 0.1 секунды.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "По данным исследований, это самый популярный (и уязвимый) пароль в мире.",
  },
  {
    question: "Первый компьютерный жесткий диск весил больше тонны.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "IBM 350 Disk File (1956) весил 1 тонну и хранил всего 3.75 МБ данных.",
  },
  {
    question: "Даже полностью удаленные файлы на носителе можно восстановить",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "Удалённые данные можно восстановить, если память, которую они занимали, не были перезаписаны новыми файлами.",
  },
  {
    question:
      "Мощность iPhone 6 примерно равна мощности компьютера, управлявшего Apollo 11.",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "iPhone 6 примерно в 120 миллионов раз мощнее компьютера Apollo Guidance Computer.",
  },
  {
    question:
      "Самый длинный когда-либо зарегистрированный пароль состоял из 1024 символов.",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Технически можно создать пароль любой длины, но большинство систем ограничивают его 256 символами.",
  },
  {
    question: "Серверы Google охлаждаются морской водой.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "Дата-центр Google в Финляндии использует морскую воду для охлаждения серверов.",
  },
  {
    question: "Hello World появился потому что Керниган забыл пароль",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Фраза стала стандартом после примера в книге 'Язык программирования С' (1978)",
  },
  {
    question: "Первая компьютерная мышь была деревянной.",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "Дуглас Энгельбарт создал первую мышь в 1964 году из деревянного корпуса.",
  },
  {
    question: "1 ГБ в 1990 году стоил как квартира в Москве",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Хотя память была дорогой, 1 ГБ стоил около $10 000 (квартира - в разы дороже)",
  },
  {
    question: "Марсоход Perseverance работает на Windows 98",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation: "Марсоход использует специализированную ОС VxWorks",
  },
  {
    question: "Клавиатура QWERTY изобретена для замедления печати",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "Расположение клавиш замедляло набор, чтобы механические пишущие машинки не заклинивало",
  },
  {
    question:
      "Твиттер изначально создавался как сервис для обмена СМС между пейджерами",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Идея Твиттера всегда была в микроблогинге, хотя первые версии действительно использовали СМС",
  },
  {
    question: "Google нанимал коз вместо газонокосилок",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation: "В 2009 году 200 коз 'стригли' траву в кампусе Google",
  },
  {
    question:
      "Первым языком программирования, использовавшимся в космических миссиях, был Python.",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Python начал использоваться позже, тогда как ранние миссии использовали языки вроде Assembly и FORTRAN.",
  },
  {
    question: "SSD-диски могут 'уставать' от слишком частого использования",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "NAND-память имеет ограниченное количество циклов перезаписи (обычно 3,000-100,000)",
  },
  {
    question: "МКС перешла с Linux на Windows",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Наоборот, в 2013 году ноутбуки на МКС перевели с Windows XP на Debian Linux",
  },
  {
    "question": "Wi-Fi расшифровывается как Wireless Fidelity (беспроводная точность).",
    "options": ["Правда", "Вымысел"],
    "answer": "Вымысел",
    "explanation": "Аббревиатуру Wi-Fi придумала маркетинговая компания, и официального полного названия у неё нет."
  },
  {
    question: "CAPTCHA расшифровывается как тест Тьюринга",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "Полное название: 'Completely Automated Public Turing test to tell Computers and Humans Apart'",
  },
  {
    question: "Компьютер Apollo имеет меньше памяти чем микроволновка",
    options: ["Правда", "Вымысел"],
    answer: "Правда",
    explanation:
      "AGC имел 4 КБ ОЗУ и 72 КБ ПЗУ, современные микроволновки - до 128 КБ",
  },
  {
    question:
      "Google каждый месяц устраивает виртуальную вечеринку для всех сотрудников с участием известных музыкантов.",
    options: ["Правда", "Вымысел"],
    answer: "Вымысел",
    explanation:
      "Корпорация Google известна своей культурой отдыха, однако ежемесячные выступления знаменитостей специально организованные компанией остаются слухами.",
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
      ${options
        .map(
          (option) => `
        <button onclick="selectAnswer('${option}')">${option}</button>
      `
        )
        .join("")}
    </div>
    <div class="score">Вопрос ${currentQuiz + 1} из ${quizData.length}</div>
  `;
}

function selectAnswer(answer) {
  const current = quizData[currentQuiz];
  const correct = current.answer;
  const question = current.question;
  const explanation = current.explanation;

  const buttons = quizEl.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === answer && answer !== correct) {
      btn.classList.add("wrong");
    }
  });

  if (question === "Большинство программистов знает, как готовить безе")
    document.querySelector("#img-2").classList.add("blink");
  if (answer === correct) score++;

  if (score % 5 === 0 && score >= 14) {
    document.querySelector("#img-1").classList.add("fastShowRight");
    setTimeout(
      () => document.querySelector("#img-1").classList.remove("fastShowRight"),
      3000
    );
  }

  // Показываем пояснение и кнопку
  const explanationEl = document.createElement("div");
  explanationEl.classList.add("explanation");
  explanationEl.innerHTML = `
    <p>${explanation}</p>
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
