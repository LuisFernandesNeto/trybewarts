function enterButton() {
  const enter = document.getElementById('enter-button');
  enter.addEventListener('click', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

enterButton();

const button = document.getElementById('submit-btn');
button.disabled = true;
const input = document.getElementById('agreement');

input.addEventListener('input', () => {
  const { value } = input;
  if (value !== null && value !== '') {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

/* const span = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const maxChars = 500;

const count = () => {
    const enterChars = textArea.value.length;
    const counter = maxChars - enterChars;
    span.textContent = counter;
}; */

textarea.addEventListener('input', function() {
  const span = document.getElementById('counter');
  const textArea = document.querySelector('#textarea');

  const counter = textArea.value.length;
  span.innerHTML = 500 - counter;
})
