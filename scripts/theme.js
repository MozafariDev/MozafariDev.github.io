(function () {
  "use strict";

  const btn = document.getElementById("darkModeToggle");
  if (btn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      btn.innerText = "🌞لایت مود";
    }
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      btn.innerText = isDark ? "🌞لایت مود" : "🌙دارک مود";
    });
  }
})();
