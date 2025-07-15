const temp = 79; // °F
const windSpeed = 5; // mph

function calculateWindChill(t, s) {
  return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}

let windChillValue = "N/A";
if (temp <= 50 && windSpeed > 3) {
  windChillValue = `${calculateWindChill(temp, windSpeed).toFixed(1)} °F`;
}
document.getElementById("windchill").textContent = `Windchill: ${windChillValue}`;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
