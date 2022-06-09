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

function relatory() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materias = document.querySelector('input[name="content"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const form = document.getElementById('form-data').value;

  document.getElementById('form-data').innerHTML = `
    <p>Nome: ${nome} ${sobrenome}</p>
    <p>Email: ${email}</p>
    <p>Casa: ${casa}</p>
    <p>Família: ${familia}</p>
    <p>Matérias: ${materias}</p>
    <p>Avaliação: ${avaliacao}</p>
    <p>Observações: ${form}</p>
  `;
}
const buttonSub = document.getElementById('submit-btn');
buttonSub.addEventListener('click', relatory);
