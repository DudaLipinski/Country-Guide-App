let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      let flag = data[0].flags.svg;
      let name = data[0].name.common;
      let region = data[0].region + "-" + data[0].subregion;
      let capital = data[0].capital[0];
      let population = data[0].population;
      let language = data[0].languages.por;

      result.innerHTML = `
        <img src="${flag}" class="flag-img">
        <h2>${name}</h2>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Region:</h4>
            <span>${region}</span>
            <h4>Capital:<h4>
            <span>${capital}</span>
            <h4>Population:<h4>
            <span>${population}</span>
            <h4>Language:<h4>
            <span>${language}</span>
          </div>
        </div>
      `;
    });
});
