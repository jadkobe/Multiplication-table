const generateButton = document.getElementById("generateButton");
const checkButton = document.getElementById("checkButton");
const inputs = document.querySelectorAll("input");

const createRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


let answers = []; // To store correct answers

// Generate button event listener
generateButton.addEventListener("click", function (e) {
  e.preventDefault();

  answers = []; // Clear previous answers

  for (let i = 0; i < inputs.length; i += 3) {
    const num1 = createRandomNumber(5, 10);
    const num2 = createRandomNumber(5, 10);
    
    // Fill readonly inputs with random numbers
    inputs[i].value = num1;
    inputs[i + 1].value = num2;
    
    // Clear previous user input
    inputs[i + 2].value = "";
    
    // Store the correct answer in the answers array
    answers.push(num1 * num2);
  }

  // Reset the result text
  document.getElementById("result").innerText = '';
});

// Check button event listener
checkButton.addEventListener("click", function (e) {
  e.preventDefault();

  let correctCounter = 0;

  for (let i = 0; i < inputs.length; i += 3) {
    const userAnswer = parseInt(inputs[i + 2].value);
    const correctAnswer = answers[i / 3];

    if (userAnswer === correctAnswer) {
      inputs[i + 2].classList.add("correct");
      inputs[i + 2].classList.remove("wrong");
      correctCounter++;
    } else {
      inputs[i + 2].classList.add("wrong");
      inputs[i + 2].classList.remove("correct");
    }
  }

  // Update the result text with the number of correct answers
  document.getElementById("result").innerText = `Correct ${correctCounter}/5`;
});