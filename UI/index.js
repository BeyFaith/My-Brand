const logoutBtn = document.getElementById("logoutBtn");

window.onload = () => {
  const user = localStorage.getItem("token");
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
