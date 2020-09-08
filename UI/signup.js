const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const btnSignUp = document.getElementById("btnSignUp");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const api_url = "https://bey-app.herokuapp.com/api/";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fname.value === "" || fname.value == null) {
    document.getElementById("fname-error").innerHTML = "First name is required";
    document.getElementById("fname-error").style.color = "red";
  }
  if (lname.value === "" || lname.value == null) {
    document.getElementById("lname-error").innerHTML = "Last name is required";
    document.getElementById("lname-error").style.color = "red";
  }
  if (email.value === "" || email.value == null) {
    document.getElementById("email-error").innerHTML = "Email is required";
    document.getElementById("email-error").style.color = "red";
  }
  if (password.value === "" || password.value == null) {
    document.getElementById("password-error").innerHTML =
      "Password is required";
    document.getElementById("password-error").style.color = "red";
  } else {
    register();
    async function register() {
      const params = {
        name: fname.value + lname.value,
        email: email.value,
        password: password.value,
      };

      await axios
        .post(api_url + "user/register", params)
        .then((res) => {
          //reset form

          form.reset();
          window.location.href = "./signin.html";
        })
        .catch((err) => console.error(err));
    }
  }
});
