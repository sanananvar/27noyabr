
const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get("country");

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const country = data.find(c => c.name.common === countryName);

        if (country) {
            const countryDetails = `
                <h1>${country.name.common}</h1>
                <img src="${country.flags.svg}" alt="${country.name.common}" class="img-fluid">
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population}</p>
                <p>Region: ${country.region}</p>
                <a href="index.html" class="btn btn-primary">Back to Countries</a>
            `;
            document.getElementById("country-details").innerHTML = countryDetails;
        } else {
            document.getElementById("country-details").innerHTML = `<h1>Country not found</h1>`;
        }
    })
   
