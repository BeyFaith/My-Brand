const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const api_url = "https://bey-app.herokuapp.com/api/";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "" || email.value == null) {
    document.getElementById("email-error").innerHTML = "Email is required";
    document.getElementById("email-error").style.color = "red";
  }
  if (password.value === "" || password.value == null) {
    document.getElementById("password-error").innerHTML =
      "Password is required";
    document.getElementById("password-error").style.color = "red";
  } else {
    login();
    async function login() {
      const params = {
        email: email.value,
        password: password.value,
      };

      await axios
        .post(api_url + "user/login", params)
        .then((res) => {
          //reset form

          form.reset();
          const admin = parseJwt(res.data.token);
          if (admin.isAdmin) {
            // Store
            localStorage.setItem("token", res.data.token);
            window.location.href = "./articles/index.html";
          } else {
            alert("You're not an Admin,use user page!");
          }
        })
        .catch((err) => console.error(err));
    }
  }
});

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
