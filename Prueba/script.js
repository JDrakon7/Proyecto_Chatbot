const themeButton = document.querySelector("#theme-btn");
const themeColor = localStorage.getItem("themeColor");


document.body.classList.toggle("light-mode", themeColor === "light_mode");
themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";


themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("themeColor", themeButton.innerText);
  themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});
