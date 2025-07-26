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

function displayTemples(templesList) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";

  templesList.forEach(t => {
    const card = document.createElement("section");
    card.classList.add("temple-card");
    card.setAttribute("role", "region");

    card.innerHTML = `
      <h2>${t.templeName}</h2>
      <p>Location: ${t.location}</p>
      <p>Dedicated: ${t.dedicated}</p>
      <p>Square Footage: ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="Image of ${t.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Filtering logic
function filterTemples(type) {
  let result = [];

  switch (type) {
    case "old":
      result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      result = temples.filter(t => t.area > 90000);
      break;
    case "small":
      result = temples.filter(t => t.area < 10000);
      break;
    default:
      result = temples;
  }

  displayTemples(result);
}

// Set up navigation link event listeners
["home", "old", "new", "large", "small"].forEach(id => {
  document.getElementById(id).addEventListener("click", event => {
    event.preventDefault();
    filterTemples(id);
  });
});

// Footer metadata
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial render
displayTemples(temples);
