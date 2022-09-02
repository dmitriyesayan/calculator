
const inputField = document.querySelector('#input');
const outputField = document.querySelector('#output');

const calculate = (integer) => {
  if (integer >= 1 && integer <= 18) {
    let num = integer
    while (integer > 1) {
      num = num*(integer-1);
      integer = integer - 1;
    }
    return num;
  } else {
    return 0;
  }
}

const display = (integer) => {
  if (integer > 0) {
    outputField.value = integer
  } else {
    outputField.value = ""
  }
}

inputField.addEventListener("keyup", event => {
  const input = parseInt(inputField.value);
  const output = calculate(input);
  display(output);
})
