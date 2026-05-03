let display = document.getElementById('Display');


function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculator() {
  try {
    display.value = eval(display.value);
    
    if (display.value == isNaN || display.value == Infinity ) {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}
  
