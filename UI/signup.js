const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')
const email = document.getElementById('email')
const form = document.getElementById('form')
const message = document.getElementById('message')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
  e.preventDefault()

  if (fname.value === '' || fname.value == null) {
    document.getElementById('fname-error').innerHTML = "First name is required"
    document.getElementById('fname-error').style.color = "red"
  }
  if (lname.value === '' || lname.value == null) {
    document.getElementById('lname-error').innerHTML = "Last name is required"
    document.getElementById('lname-error').style.color = "red"
  }
  if (email.value === '' || email.value == null) {
    document.getElementById('email-error').innerHTML = "Email is required"
    document.getElementById('email-error').style.color = "red"
  }
  if (password.value === '' || password.value == null) {
    document.getElementById('password-error').innerHTML = "Password is required"
    document.getElementById('password-error').style.color = "red"
  }
  if (confirm.value === '' || confirm.value == null) {
    document.getElementById('confirm-error').innerHTML = "Password Confirmation is required"
    document.getElementById('confirm-error').style.color = "red"
  }
  

  else{
    alert(fname.value + ' , thanks for signing up, welcome to my world!');
    form.reset ()
}
})