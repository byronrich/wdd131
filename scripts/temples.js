// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Footer Dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
const yearSpan = document.getElementById("year");
const modSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modSpan.textContent = document.lastModified;
