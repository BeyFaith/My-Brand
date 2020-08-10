const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const password = document.getElementById('password')
const btnSignUp = document.getElementById('btnSignUp')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const auth = firebase.auth();


// btnSignUp.addEventListener('click', e=> {
// const fname = document.getElementById('fname')
// const lname = document.getElementById('lname')
// const password = document.getElementById('password')
// const btnSignUp = document.getElementById('btnSignUp')
// const email = document.getElementById('email')
// const auth = firebase.auth();

// const promise = auth.createUserWithEmailAndPassword(email,password);
// promise.catch(e =>console.log(e.message));
// })

// firebase.auth().onAuthStateChanged(firebase =>{
//   if(firebaseUser) {
//     console.log(firebaseUser);
//   } else {
//     console.log("Not logged in");
//   }
// })

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
 
  

  else{
   
    auth.createUserWithEmailAndPassword(email.value,password.value)
.then(user =>{
  
  return db.ref(`users/${user.uid}`).push().set({
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    password: password.value
  });
})
 
.catch((err) => {
  console.log(err);
});

    
}

})




