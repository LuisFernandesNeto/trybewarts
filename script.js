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
