document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".header__theme-toggle");
  const themeIcon = document.querySelector(".header__theme-icon");

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "cyber" ? "neon" : "cyber";

      document.documentElement.setAttribute("data-theme", newTheme);

      if (newTheme === "cyber") {
        themeIcon.textContent = "🌙";
        document.body.classList.add("cyber-theme");
        document.body.classList.remove("neon-theme");
      } else {
        themeIcon.textContent = "☀️";
        document.body.classList.add("neon-theme");
        document.body.classList.remove("cyber-theme");
      }

      localStorage.setItem("theme", newTheme);

      updateThemeStyles(newTheme);
    });

    const savedTheme = localStorage.getItem("theme") || "cyber";
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (savedTheme === "cyber") {
      themeIcon.textContent = "🌙";
      document.body.classList.add("cyber-theme");
    } else {
      themeIcon.textContent = "☀️";
      document.body.classList.add("neon-theme");
    }

    updateThemeStyles(savedTheme);
  }
});

function updateThemeStyles(theme) {
  const root = document.documentElement;

  if (theme === "cyber") {
    root.style.setProperty('--primary', '#00ff88');
    root.style.setProperty('--secondary', '#0088ff');
    root.style.setProperty('--accent', '#ff0088');
    root.style.setProperty('--bg', '#0a0a0a');
    root.style.setProperty('--surface', '#1a1a1a');
    root.style.setProperty('--text', '#e0e0e0');
    root.style.setProperty('--purple', '#8a2be2');
  } else {
    // Неоновая тема
    root.style.setProperty('--primary', '#ff00ff');
    root.style.setProperty('--secondary', '#00ffff');
    root.style.setProperty('--accent', '#ffff00');
    root.style.setProperty('--bg', '#000011');
    root.style.setProperty('--surface', '#1a0022');
    root.style.setProperty('--text', '#ffffff');
    root.style.setProperty('--purple', '#bf00ff');
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "cyber";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeIcon = document.querySelector(".header__theme-icon");
  if (themeIcon) {
    themeIcon.textContent = savedTheme === "cyber" ? "🌙" : "☀️";
  }

  updateThemeStyles(savedTheme);
}

initializeTheme();