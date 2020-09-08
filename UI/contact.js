const fname = document.getElementById("fname");
const email = document.getElementById("email");
const form = document.getElementById("form");
const content = document.getElementById("message");
const errorElement = document.getElementById("error");
const logoutBtn = document.getElementById("logoutBtn");
const user = localStorage.getItem("token");
const api_url = "https://bey-app.herokuapp.com/api/";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fname.value === "" || fname.value == null) {
    document.getElementById("fname-error").innerHTML = "Name is required";
    document.getElementById("fname-error").style.color = "red";
  }

  if (email.value === "" || email.value == null) {
    document.getElementById("email-error").innerHTML = "Email is required";
    document.getElementById("email-error").style.color = "red";
  }

  if (message.value === "" || message.value == null) {
    document.getElementById("message-error").innerHTML = "Message is required";
    document.getElementById("message-error").style.color = "red";
  } else {
    message();
    async function message() {
      const params = {
        name: fname.value,
        email: email.value,
        content: content.value,
      };

      await axios
        .post(api_url + "messages", params, { headers: { "auth-token": user } })
        .then((res) => {
          //reset form

          form.reset();
          alert("Thank you for your message!");
        })
        .catch((err) => console.error(err));
    }
  }
});

window.onload = () => {
  if (user) {
    logoutBtn.style.display = "inline";
  } else {
    logoutBtn.style.display = "none";
  }
};

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location = "./signin.html";
});
