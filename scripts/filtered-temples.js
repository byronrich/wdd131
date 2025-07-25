const temples = [
  {
    templeName: "Salt Lake City Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschrist.org/img/salt-lake-temple.jpg"
  },
  {
    templeName: "Trapper Temple",
    location: "Trapper, Utah, USA",
    dedicated: "2022-05-12",
    area: 15000,
    imageUrl: "https://churchofjesuschrist.org/img/trapper-temple.jpg"
  },
  {
    templeName: "Monticello Temple",
    location: "Monticello, Utah, USA",
    dedicated: "1998-07-26",
    area: 7200,
    imageUrl: "https://churchofjesuschrist.org/img/monticello-temple.jpg"
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "Anchorage, Alaska, USA",
    dedicated: "1999-01-09",
    area: 11805,
    imageUrl: "https://churchofjesuschrist.org/img/anchorage-temple.jpg"
  },
  {
    templeName: "Manti Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://churchofjesuschrist.org/img/manti-temple.jpg"
  },
  {
    templeName: "Provo Temple",
    location: "Provo, Utah, USA",
    dedicated: "1972-02-09",
    area: 128325,
    imageUrl: "https://churchofjesuschrist.org/img/provo-temple.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1836-03-27",
    area: 55000,
    imageUrl: "https://churchofjesuschrist.org/img/kirtland-temple.jpg"
  },
  {
    templeName: "Vernal Utah Temple",
    location: "Vernal, Utah, USA",
    dedicated: "1997-11-02",
    area: 33900,
    imageUrl: "https://churchofjesuschrist.org/img/vernal-temple.jpg"
  },
  {
    templeName: "Logan Temple",
    location: "Logan, Utah, USA",
    dedicated: "1884-05-17",
    area: 119619,
    imageUrl: "https://churchofjesuschrist.org/img/logan-temple.jpg"
  }
];

// Display logic
const templeContainer = document.querySelector("#temple-cards");

function displayTemples(templesList) {
  templeContainer.innerHTML = ""; // Clear previous entries
  templesList.forEach(temple => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Square Footage: ${temple.area.toLocaleString()} sq ft`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Image`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);
    templeContainer.appendChild(card);
  });
}

// Initial display
displayTemples(temples);

// Example filtering: show only temples dedicated before 1900
function filterHistoricTemples() {
  const historic = temples.filter(t => parseInt(t.dedicated.split("-")[0]) < 1900);
  displayTemples(historic);
}

// You could call `filterHistoricTemples()` on a button click or page load conditionally
