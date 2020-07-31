const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const email = document.getElementById('email')
const

form.addEventListener('submit',(e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if(password.value.length <= 6) {
    messages.push('Password is required')
  }

  if(messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(',')

  }
})