
theme="dark";
const changeImages = (theme) => {
  const shapes = document.querySelectorAll(".shape, .icon");
  const to_replace = theme == "dark" ? "light" : "dark";

  Array.from(shapes).forEach((shape) => {
    shape.src = shape.src.replace(to_replace, theme);
  });
};

const changeTheme = (theme) => {
  if (!(theme === "dark" || theme === "light")) {
    const dark_theme = window.matchMedia("(prefers-color-scheme: dark)");
    theme = dark_theme.matches ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
  theme === "dark"
    ? document.body.classList.add(theme)
    : document.body.classList.remove("dark");
  changeImages(theme);
};

document.getElementById("change-theme").addEventListener("click", () => {
  let theme = localStorage.getItem("theme");
  theme = theme === "dark" ? "light" : "dark";
  changeTheme(theme);
});

const removeLoader = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-content").style.display = "block";
};

Array.from(document.querySelectorAll(".hamburger-menu, .cross")).forEach(
  (element) => {
    element.addEventListener("click", (event) => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("open");
      menu.classList.toggle("close");
    });
  }
);

window.onload = () => {
  
  let theme = "dark";
  changeTheme(theme);

  removeLoader();

  setTimeout(() => {
    adjustBoardSection();
  }, 555);
};
