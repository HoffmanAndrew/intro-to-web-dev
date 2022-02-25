// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;



if(answerOne == 'Goku') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } 
   else {
    alert('Hint: He is the main character of the show dragon ball.')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'Luffy') {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  }  else {
    alert('Hint: He is the main character of the show One Piece.')
  }
}

function submitAnswerThree() {
  // Get answer two's input element
  const answerThreeInput = document.getElementById('answer-three-input');
  // Get the number from answer two's input element
  const answerThree = answerThreeInput.value;

  if(answerThree == 'Natsu') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
  }  else {
    alert('Hint: He is the main character of the show Fairy Tail.')
  }
}

function submitAnswerFour() {
  // Get answer two's input element
  const answerFourInput = document.getElementById('answer-four-input');
  // Get the number from answer two's input element
  const answerFour = answerFourInput.value;

  if(answerFour == 'Ichigo') {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  }  else {
    alert('Hint: He is the main character of the show Bleach.')
  }
}
function submitAnswerFive() {
  // Get answer two's input element
  const answerFiveInput = document.getElementById('answer-five-input');
  // Get the number from answer two's input element
  const answerFive = answerFiveInput.value;

  if(answerFive == 'Saitama') {
    alert("That's right!");
    hide('question-five');
    show('done');
  }  else {
    alert('Hint: He is the main character of the show One Punch Man.')
  }
}

// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}