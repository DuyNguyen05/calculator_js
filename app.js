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
  form.displayResult.value = eval(form.displayResult.value);
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
