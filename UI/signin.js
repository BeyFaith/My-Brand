const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')



form.addEventListener('submit',(e) => {
  e.preventDefault()


  if (email.value === '' || email.value == null) {
    document.getElementById('email-error').innerHTML = "Email is required"
    document.getElementById('email-error').style.color = "red"
  }
  if (password.value === '' || password.value == null) {
    document.getElementById('password-error').innerHTML = "Password is required"
    document.getElementById('password-error').style.color = "red"
  }
  
  else{
    alert( 'Dear User, thanks for signing in');
    form.reset ()
}
  
})