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
  InsertedNumbers.innerHTML += '0';
})

button1.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '1';
})

button2.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '2';
})

button3.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '3';
})

button4.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '4';
})

button5.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '5';
})

button6.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '6';
})

button7.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '7';
})

button8.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '8';
})

button9.addEventListener('click', () => {
  InsertedNumbers.innerHTML += '9';
})

/* associating operator&co buttons with functions */
const buttonPlus = document.querySelector("#bPlus")
const buttonMinus = document.querySelector("#bMinus")
const buttonMoltiplicator = document.querySelector("#bMoltiplicator")
const buttonDivide = document.querySelector("#bDivide")
const buttonRemainder = document.querySelector("#bRemainder")
const buttonDot = document.querySelector("#bDot")

buttonPlus.addEventListener('click', () => {
  InsertedNumbers.innerHTML += " + ";
  Results += " + ";
})

buttonMinus.addEventListener('click', () => {
  InsertedNumbers.innerHTML += " - ";
})

buttonMoltiplicator.addEventListener('click', () => {
  InsertedNumbers.innerHTML += " × ";
})

buttonDivide.addEventListener('click', () => {
  InsertedNumbers.innerHTML += " ÷ ";
})

buttonRemainder.addEventListener('click', () => {
  InsertedNumbers.innerHTML += " % ";
})

buttonDot.addEventListener('click', () => {
  InsertedNumbers.innerHTML += ".";
})

/* creating functions */

function equal() {
  Final = 
}

