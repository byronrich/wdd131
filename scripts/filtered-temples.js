const temples = [
  {
    templeName: "Salt Lake City Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/500%2C/0/default"
  },
  {
    templeName: "Draper Temple",
    location: "Draper, Utah, USA",
    dedicated: "2022-05-12",
    area: 15000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/dca32cd633382f896137f45e1af4088adf7fb310/full/500%2C/0/default"
  },
  {
    templeName: "Monticello Temple",
    location: "Monticello, Utah, USA",
    dedicated: "1998-07-26",
    area: 7200,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/00b60393731fd52ea05f41d561df6baa573c9905/full/500%2C/0/default"
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "Anchorage, Alaska, USA",
    dedicated: "1999-01-09",
    area: 11805,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/500%2C/0/default"
  },
  {
    templeName: "Manti Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/d9c313eb96c173d0ad32f21f461ce994129c9e8d/full/500%2C/0/default"
  },
  {
    templeName: "Provo Temple",
    location: "Provo, Utah, USA",
    dedicated: "1972-02-09",
    area: 128325,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/e97d43cdfab131f3ffac633cd7c952de861d51c8/full/500%2C/0/default"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1836-03-27",
    area: 55000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/a50w69clwz1ax44mjqe89pl101jwq6a0tttgxuib/pct:0,7.8,100,84.4/!1600%2C900/0/default"
  },
  {
    templeName: "Vernal Utah Temple",
    location: "Vernal, Utah, USA",
    dedicated: "1997-11-02",
    area: 33900,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/d8c07cd3032b589fba11a8a8ab2bc160949ee735/full/500%2C/0/default"
  },
  {
    templeName: "Logan Temple",
    location: "Logan, Utah, USA",
    dedicated: "1884-05-17",
    area: 119619,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/54ac3388abacb11ef04678697a2fc2b6aa0ac4f5/full/500%2C/0/default"
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
