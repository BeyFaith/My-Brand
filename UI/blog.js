const userArea = document.querySelectorAll(".userArea");
const logoutBtn = document.getElementById("logoutBtn");

window.onload = () => {
  const user = localStorage.getItem("token");
  if (user) {
    logoutBtn.style.display = "inline";
    userArea.forEach((link) => {
      link.style.display = "block";
    });
  } else {
    logoutBtn.style.display = "none";
    userArea.forEach((link) => {
      link.style.display = "none";
    });
  }
};

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location = "./signin.html";
});
