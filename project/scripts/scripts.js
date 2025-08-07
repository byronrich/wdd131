// Display current year in footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Display last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Wind chill calculation
function calculateWindChill(tempF, speedMph) {
  if (tempF <= 50 && speedMph > 3) {
    const chill =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speedMph, 0.16) +
      0.4275 * tempF * Math.pow(speedMph, 0.16);
    return `${Math.round(chill)} °F`;
  } else {
    return "N/A";
  }
}

// Simulated weather data (replace with API if needed)
const temp = 42; // degrees Fahrenheit
const speed = 10; // mph

document.getElementById("temp").textContent = `${temp} °F`;
document.getElementById("speed").textContent = `${speed} mph`;
document.getElementById("windchill").textContent = `Windchill: ${calculateWindChill(temp, speed)}`;
