let currentIndex = 0;
let score = 0;

const metaEl = document.getElementById("question-meta");
const titleEl = document.getElementById("question-title");
const promptEl = document.getElementById("question-prompt");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const resultsSection = document.getElementById("results-section");
const resultsSummary = document.getElementById("results-summary");
const questionSection = document.getElementById("question-section");

function renderQuestion() {
  const q = questions[currentIndex];

  metaEl.textContent =
    `Scenario ${currentIndex + 1} of ${questions.length} • ${q.category} • ${q.difficulty}`;

  titleEl.textContent = q.title;
  promptEl.textContent = q.prompt;

  optionsContainer.innerHTML = "";
  feedbackEl.textContent = "";
  nextButton.classList.add("hidden");

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.textContent = `${opt.id}) ${opt.text}`;
    btn.addEventListener("click", () => handleAnswer(idx, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, selectedButton) {
  const q = questions[currentIndex];
  const selectedOpt = q.options[selectedIndex];

  // Disable all buttons
  const buttons = optionsContainer.querySelectorAll(".option-button");
  buttons.forEach(btn => (btn.disabled = true));

  // Mark correct and incorrect
  q.options.forEach((opt, idx) => {
    if (opt.isCorrect) {
      buttons[idx].classList.add("correct");
    }
  });

  if (!selectedOpt.isCorrect) {
    selectedButton.classList.add("incorrect");
  } else {
    score += 1;
  }

  feedbackEl.textContent = selectedOpt.feedback;
  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

function showResults() {
  questionSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  resultsSummary.textContent = `You answered ${score} out of ${questions.length} scenarios correctly.`;
}

// Start quiz
renderQuestion();
