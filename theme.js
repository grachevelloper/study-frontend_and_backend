document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".header__theme-toggle");
  const themeIcon = document.querySelector(".header__theme-icon");

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "cyber" ? "neon" : "cyber";

      document.documentElement.setAttribute("data-theme", newTheme);
      themeIcon.textContent = newTheme === "cyber" ? "🌙" : "☀️";

      localStorage.setItem("theme", newTheme);
    });

    const savedTheme = localStorage.getItem("theme") || "cyber";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeIcon.textContent = savedTheme === "cyber" ? "🌙" : "☀️";
  }
});
