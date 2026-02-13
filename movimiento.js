const yesbtn = document.getElementById("yesbtn");
const nobtn  = document.getElementById("nobtn");
const mensaje = document.getElementById("mensaje");

yesbtn.addEventListener("click", () => {
  mensaje.textContent = "💖 ERA OVEO QUE IBAS A DECIR DECIR QUE SÍ JEJEJE 💕 TE AMO ❤️";
});

// Cuando intentas presionarlo, huye
nobtn.addEventListener("mouseenter", (e) => {
  e.preventDefault(); // evita que se “presione”

  // Asegura que ya pueda moverse por toda la pantalla
  nobtn.style.position = "fixed";

  const maxX = window.innerWidth - nobtn.offsetWidth;
  const maxY = window.innerHeight - nobtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  nobtn.style.left = x + "px";
  nobtn.style.top  = y + "px";
});
