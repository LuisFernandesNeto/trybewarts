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

const textarea = document.getElementById('textarea');
textarea.addEventListener('input', () => {
  const span = document.getElementById('counter');
  const textArea = document.querySelector('#textarea');

  const counter = textArea.value.length;
  span.innerHTML = 500 - counter;
});

/* const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.getElementById('label-family');
const materias = document.getElementById('label-content');
const avaliacao = document.getElementById('label-rate');
const buttonSubmit = document.getElementById('submit-btn');
const form = document.getElementById('form-data');

const test = [nome, sobrenome, email, casa, familia, materias, avaliacao];
 */
/* buttonSubmit.addEventListener('click', () => {
  for (let index = 0; index < test.length; index += 1) {
    const criar = document.createElement('p');
    const aleatoria = test[index];
    form.appendChild(criar);
  }
}); */
