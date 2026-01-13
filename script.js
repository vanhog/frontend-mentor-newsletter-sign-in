const form = document.getElementById('form');
const addressField = document.getElementById('address');
const errorMsg = document.getElementById('emailError');

const handleSubmit = (e) => {
  e.preventDefault(); // prevent the default behaviour

  let inString = addressField.value.toString();

  if (isMail(inString)) {
    document.getElementById('user_mail').innerText = inString;
    document.getElementById('subscribe').classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
  } else {
    addressField.style.backgroundColor = '#ff6A3A33';
    addressField.style.color = 'hsl(4, 100%, 67%)';
    addressField.style.borderColor = 'hsl(4, 100%, 67%)';

    errorMsg.classList.remove('hidden');
  }
};

form.addEventListener('submit', handleSubmit);

function clear_errorMsg() {
  errorMsg.classList.add('hidden');
  addressField.style.backgroundColor = '#ffffff';
  addressField.style.color = 'hsl(234, 29%, 20%)';
  addressField.style.borderColor = 'hsl(234, 29%, 20%)';
}

function dismissMsg() {
  addressField.value = '';
  document.getElementById('subscribe').classList.remove('hidden');
  document.getElementById('success').classList.add('hidden');
}

function isMail(inMail) {
  const re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  // found at https://emailregex.com/

  let isEmail = false;

  let result = inMail.match(re) || [];

  if (result.length === 1) {
    return true;
  } else {
    return false;
  }
}
