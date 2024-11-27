import { GetCategoriesById } from "./api/Requests/categories.js";
import BaseURL from "./api/baseURL.js";


let id = new URLSearchParams(window.location.search).get("id")


let DetailContainer = document.querySelector(".container")



GetCategoriesById(BaseURL,id)
.then(res =>ShowCategories(res.categories))


function ShowCategories(obj){
    console.log(obj)
    DetailContainer.innerHTML=`<div class="card">
            <div class="card-body">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-text">${obj.description}</p>
            </div>
            <div class="card-footer">
                <a href="index.html" class="btn btn-secondary">Back to Categories</a>
            </div>
        </div>`
}