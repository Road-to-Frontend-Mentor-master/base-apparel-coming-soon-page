const formDOMEl = document.forms[0];
const emailFormFieldDOMEl = document.getElementById('email-form-field');
const email = document.getElementById('email');
const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email, regExp = emailRegExp) => regExp.test(email);

formDOMEl.addEventListener('submit', e => {
  const isValidEmail = validateEmail(email.value);

  if (!isValidEmail) {
    e.preventDefault();
    emailFormFieldDOMEl.classList.add('error');
  }
});

email.addEventListener('focus', () => {
  emailFormFieldDOMEl.classList.remove('error');
});
