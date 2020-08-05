const fname = document.getElementById('fname')
const email = document.getElementById('email')
const form = document.getElementById('form')
const message = document.getElementById('message')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
  e.preventDefault()

  if (fname.value === '' || fname.value == null) {
    document.getElementById('fname-error').innerHTML = "Name is required"
    document.getElementById('fname-error').style.color = "red"
  }
  
  if (email.value === '' || email.value == null) {
    document.getElementById('email-error').innerHTML = "Email is required"
    document.getElementById('email-error').style.color = "red"
  }
  
  if (message.value === '' || message.value == null) {
    document.getElementById('message-error').innerHTML = "Message is required"
    document.getElementById('message-error').style.color = "red"
  }

  else{
    alert(fname.value + ' , thanks for your message, someone from our team will reach out to you shortly');
    form.reset ()
}

  
})