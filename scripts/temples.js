// Dynamically insert year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger functionality
const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburger.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});
