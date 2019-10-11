var d= null;

function calcNumbers(result){
  if(d !== null){
    form.displayResult.value = result;
    d = null;
  }
  else{
    form.displayResult.value = form.displayResult.value+result;
  }
}

function result() {
  form.displayResult.value = calculate(parseCalculationString(form.displayResult.value));
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if(target.classList.contains('equal-sign')){
    d = form.displayResult.value;
  }
});

function clearAll() {
  form.displayResult.value = "";
}

function parseCalculationString(s) {
  var calculation = [],
      current = '';
  for (var i = 0, ch; ch = s.charAt(i); i++) {
    if ('*/+-'.indexOf(ch) > -1) {
      if (current == '' && ch == '-') {
        current = '-';
      } else {
        calculation.push(parseFloat(current), ch);
        current = '';
      }
    } else {
      current += s.charAt(i);
    }
  }
  if (current != '') {
    calculation.push(parseFloat(current));
  }
  return calculation;
}

function calculate(calc) {
  var ops = [{'*': (a, b) => a * b, '/': (a, b) => a / b},
             {'+': (a, b) => a + b, '-': (a, b) => a - b}],
      newCalc = [],
      currentOp;
  for (var i = 0; i < ops.length; i++) {
    for (var j = 0; j < calc.length; j++) {
      if (ops[i][calc[j]]) {
        currentOp = ops[i][calc[j]];
      } else if (currentOp) {
        newCalc[newCalc.length - 1] =
          currentOp(newCalc[newCalc.length - 1], calc[j]);
        currentOp = null;
      } else {
        newCalc.push(calc[j]);
      }
    }
    calc = newCalc;
    newCalc = [];
  }
  if (calc.length > 1) {
    return calc;
  } else {
    return calc[0];
  }
}
