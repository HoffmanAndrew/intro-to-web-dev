// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Everything you thought had meaning.
Every hope dream or moment of happiness
None of it matters as you lie bleeding out on the battlefield. 
None of it changes what a speeding rock does to a body. 
We all die.
But does that mean our lives are meaningless? 
Does that mean that there was no point in our being born?
Would you say that of our slain comrades?
What about their lives? 
Were they meaningless? 
They were not!
Their memory serves as an example to us all.
The courageous fallen.
The anguished fallen.
Their lives have meaning because we the living refuse to forget them.
And as we ride to certain death we trust our successors to do the same for us. 
Because my soldiers do not buckle or yield when faced with the cruelty of this world.
My soldiers push forward!
My soldiers scream out!
My soldiers rage!`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

function displayshortWords() {
  const shortWordsElement = document.getElementById('short-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}
function displayaWords() {
  const aWordsElement = document.getElementById('a-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.startsWith ('a'))  {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      aWordsElement.appendChild(wordElement);
    }
  }
}

function displaythirdWords() {
  const thirdWordsElement = document.getElementById('third-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i=+3) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      thirdWordsElement.appendChild(wordElement);
    }
  }


function displaycommonWords() {
  const commonWordsElement = document.getElementById('common-words');
    let commonWords = ['The', 'the', 'you', 'of', 'and', 'And','be', 'to', 'a', 'in', 'that', 'have', 'I']
  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(!commonWords.includes(word)) {

      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      commonWordsElement.appendChild(wordElement);
    }
  }
}





// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  displayshortWords();
  displayaWords();
  displaythirdWords();
 
  displaycommonWords();

  // TODO: Call your functions here!
}



