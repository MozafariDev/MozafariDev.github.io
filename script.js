console.info("من طاها مظفری، توسعه دهنده این وبسایت هستم.");
const btn = document.getElementById("darkModeToggle");
if (localStorage.theme === "dark") {
  document.body.classList.add("dark-mode");
  if (btn) {
    btn.innerText = localStorage.theme === "dark" ? "🌞لایت مود" : "🌙دارک مود";
  }
}
btn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.theme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  if (btn) {
    btn.innerText = localStorage.theme === "dark" ? "🌞لایت مود" : "🌙دارک مود";
  }
};
