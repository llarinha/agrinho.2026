// MENU MOBILE
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.onclick = () => {
  menu.classList.toggle("active");
};

// BOTÃO LER MAIS
document.querySelectorAll(".btn").forEach((button) => {
  button.onclick = () => {
    const moreText = button.previousElementSibling.querySelector(".more");

    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      button.innerText = "Ler mais";
    } else {
      moreText.style.display = "inline";
      button.innerText = "Mostrar menos";
    }
  };
});