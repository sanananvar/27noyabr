document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.width = "18rem";
                card.innerHTML = `
                    <img src="${country.flags.svg}" class="card-img-top" alt="${country.name.common}">
                    <div class="card-body">
                        <h5 class="card-title">${country.name.common}</h5>
                        <p class="card-text">Region: ${country.region}</p>
                        <a href="details.html?country=${country.name.common}" class="btn btn-primary">View Details</a>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching countries:", error));
});
