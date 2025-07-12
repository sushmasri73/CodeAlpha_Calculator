const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
  showLiveResult();
}

function clearDisplay() {
  display.value = '';
  display.placeholder = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  showLiveResult();
}

function calculateResult() {
  try {
    let expression = display.value.replace(/\^/g, '');
    display.value = eval(expression);
    display.placeholder = '';
  } catch {
    display.value = 'Error';
  }
}

function showLiveResult() {
  try {
    if (display.value) {
      const result = eval(display.value.replace(/\^/g, ''));
      if (!isNaN(result)) {
        display.placeholder = = ${result};
      }
    } else {
      display.placeholder = '';
    }
  } catch {
    display.placeholder = 'Error';
  }
}

function applyFunction(func) {
  try {
    const value = parseFloat(display.value);
    let result;
    switch (func) {
      case 'sin': result = Math.sin(toRadians(value)); break;
      case 'cos': result = Math.cos(toRadians(value)); break;
      case 'tan': result = Math.tan(toRadians(value)); break;
      case 'sqrt': result = Math.sqrt(value); break;
      case 'square': result = Math.pow(value, 2); break;
      case 'cube': result = Math.pow(value, 3); break;
      case 'log': result = Math.log10(value); break;
      case 'ln': result = Math.log(value); break;
      default: result = 'Error';
    }
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function toRadians(deg) {
  return deg * (Math.PI / 180);
}

document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.^';
  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    calculateResult();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}