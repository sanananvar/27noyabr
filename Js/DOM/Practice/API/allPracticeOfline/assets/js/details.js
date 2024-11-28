
import { GetDataById } from "./api/requests/requests.js"
import BaseUrl from "./api/baseurl.js"
let id = new URLSearchParams(window.location.search).get("id")

let container=document.querySelector(".container")

GetDataById(`${BaseUrl}/products`,id)
.then(res=>ShowProducts(res.data))



function ShowProducts(obj){
  console.log(obj)
    console.log(obj)
    container.innerHTML=`

    <div class="card mb-5">
    <div class="card-body">
    <img  src="${obj.image}" class="card-img-top" alt="...">
    <h5 class="card-title">${obj.brand}</h5>
    <p class="card-text">${obj.model}</p>
    <p class="card-text">${obj.operatingSystem}</p>
    <p class="card-text">${obj.year}</p>
    <p class="card-text">${obj.price}</p>
  </div>
</div>
    </div>

    
    `
}
