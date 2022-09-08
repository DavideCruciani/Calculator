const InsertedNumbers = document.querySelector("#operations-value");

/* associating num buttons with functions */
const button0 = document.querySelector("#b0");
const button1 = document.querySelector("#b1");
const button2 = document.querySelector("#b2");
const button3 = document.querySelector("#b3");
const button4 = document.querySelector("#b4");
const button5 = document.querySelector("#b5");
const button6 = document.querySelector("#b6");
const button7 = document.querySelector("#b7");
const button8 = document.querySelector("#b8");
const button9 = document.querySelector("#b9");

button0.addEventListener('click', () => {
  InsertedNumbers.textContent += 0;
})

button1.addEventListener('click', () => {
  InsertedNumbers.textContent += 1;
})

button2.addEventListener('click', () => {
  InsertedNumbers.textContent += 2;
})

button3.addEventListener('click', () => {
  InsertedNumbers.textContent += 3;
})

button4.addEventListener('click', () => {
  InsertedNumbers.textContent += 4;
})

button5.addEventListener('click', () => {
  InsertedNumbers.textContent += 5;
})

button6.addEventListener('click', () => {
  InsertedNumbers.textContent += 6;
})

button7.addEventListener('click', () => {
  InsertedNumbers.textContent += 7;
})

button8.addEventListener('click', () => {
  InsertedNumbers.textContent += 8;
})

button9.addEventListener('click', () => {
  InsertedNumbers.textContent += 9;
})

/* associating operator&co buttons with functions */
const buttonPlus = document.querySelector("#bPlus")
const buttonMinus = document.querySelector("#bMinus")
const buttonMoltiplicator = document.querySelector("#bMoltiplicator")
const buttonDivide = document.querySelector("#bDivide")
const buttonRemainder = document.querySelector("#bRemainder")
const buttonDot = document.querySelector("#bDot")

buttonPlus.addEventListener('click', () => {
  let last = InsertedNumbers.textContent.charAt(InsertedNumbers.textContent.length - 1);
  if ( last === '0' || last === '1' || last === '2' ||  last === '3' || last === '4' || last === '5' || last === '6' || last === '7' || last === '8' || last === '9' ) {
  if (typeof +last === 'number') {
  InsertedNumbers.textContent += " + ";
  }
}
})

buttonMinus.addEventListener('click', () => {
  let last = InsertedNumbers.textContent.charAt(InsertedNumbers.textContent.length - 1);
  if ( last === '0' || last === '1' || last === '2' ||  last === '3' || last === '4' || last === '5' || last === '6' || last === '7' || last === '8' || last === '9' ) {
  if (typeof +last === 'number') {
  InsertedNumbers.textContent += " - ";
  }
}
})

buttonMoltiplicator.addEventListener('click', () => {
  let last = InsertedNumbers.textContent.charAt(InsertedNumbers.textContent.length - 1);
  if ( last === '0' || last === '1' || last === '2' ||  last === '3' || last === '4' || last === '5' || last === '6' || last === '7' || last === '8' || last === '9' ) {
  if (typeof +last === 'number') {
  InsertedNumbers.textContent += " × ";
  }
}
})

buttonDivide.addEventListener('click', () => {
  let last = InsertedNumbers.textContent.charAt(InsertedNumbers.textContent.length - 1);
  if ( last === '0' || last === '1' || last === '2' ||  last === '3' || last === '4' || last === '5' || last === '6' || last === '7' || last === '8' || last === '9' ) {
  if (typeof +last === 'number') {
  InsertedNumbers.textContent += " ÷ ";
  }
}
})

buttonRemainder.addEventListener('click', () => {
  let last = InsertedNumbers.textContent.charAt(InsertedNumbers.textContent.length - 1);
  if ( last === '0' || last === '1' || last === '2' ||  last === '3' || last === '4' || last === '5' || last === '6' || last === '7' || last === '8' || last === '9' ) {
  if (typeof +last === 'number') {
  InsertedNumbers.textContent += " % ";
  }
}
})

buttonDot.addEventListener('click', () => {
  let last = InsertedNumbers.textContent.charAt(InsertedNumbers.textContent.length - 1);
  if ( last === '0' || last === '1' || last === '2' ||  last === '3' || last === '4' || last === '5' || last === '6' || last === '7' || last === '8' || last === '9' ) {
  if (typeof +last === 'number') {
  InsertedNumbers.textContent += " . ";
  }
}
})

/* equal button */

const buttonEqual = document.querySelector("#bEqual")
const ResultsNumber = document.querySelector("#results-value")

buttonEqual.addEventListener('click', () => {
  ResultsNumber.textContent = eval(InsertedNumbers.textContent.replace(/÷/g, "/").replace(/×/g, "*"));
})

/* AC button */

const buttonAC = document.querySelector("#bAC")

buttonAC.addEventListener('click', () => {
  InsertedNumbers.textContent = "";
  ResultsNumber.textContent = "";
})

/* C button */
