document.addEventListener("DOMContentLoaded", () => {
  // Tasks
  /*
  1: When someone select one option then change its bg-color and
  2: use setTimeOut to move the user to the next question he select one option
  3: Each question has individual marks then calculate them
  */

  const startBtn = document.getElementById("start-btn")
  const nextBtn = document.getElementById("next-btn")
  const restartBtn = document.getElementById("restart-btn")
  const questionContainer = document.getElementById("question-container")
  const questionText = document.getElementById("question-text")
  const choicesList = document.getElementById("choices-list")
  const resultContainer = document.getElementById("result-container")
  const scoreDisplay = document.getElementById("score")

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
      answer: "Blue Whale"
    },
    // {
    //   question: "Which element has the chemical symbol 'O'?",
    //   choices: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    //   answer: "Oxygen"
    // },
    // {
    //   question: "How many continents are there?",
    //   choices: ["5", "6", "7", "8"],
    //   answer: "7"
    // },
    // {
    //   question: "Who wrote the play 'Romeo and Juliet'?",
    //   choices: ["William Wordsworth", "Jane Austen", "William Shakespeare", "Mark Twain"],
    //   answer: "William Shakespeare"
    // },
    // {
    //   question: "What is the boiling point of water at sea level (in °C)?",
    //   choices: ["50", "90", "100", "120"],
    //   answer: "100"
    // },
    // {
    //   question: "Which gas do plants absorb from the atmosphere?",
    //   choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    //   answer: "Carbon Dioxide"
    // },
    // {
    //   question: "In which year did World War II end?",
    //   choices: ["1940", "1942", "1945", "1950"],
    //   answer: "1945"
    // },
    // {
    //   question: "What is the square root of 64?",
    //   choices: ["6", "7", "8", "9"],
    //   answer: "8"
    // }
  ];


  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
      showQuestion()
    } else {
      showResult()
    }
  })

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz()
  })

  function startQuiz(){
    startBtn.classList.add("hidden")
    resultContainer.classList.add("hidden")
    questionContainer.classList.remove("hidden")
    showQuestion()
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "" // clear previous choices
    questions[currentQuestionIndex].choices.forEach(choice => {
      const li = document.createElement("li")
      li.textContent = choice
      li.addEventListener("click", () => selectAnswer(choice))
      choicesList.appendChild(li)
    })
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer
    if(choice === correctAnswer){
      score++;
    }
    nextBtn.classList.remove("hidden")
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
  

})