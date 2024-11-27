import BaseUrl from "./api/baseurl.js";
import { GetDatas,GetDataById } from "./api/requests/requests.js";
let auth = document.querySelector(".auth")
let container = document.querySelector('.container')
function GetLocalId() {
    let userId = JSON.parse(localStorage.getItem("userInfo"))
    if (userId) {
        GetDataById(`${BaseUrl}/users`, userId)
            .then(res => {
                let userName = res.data.userName
                console.log(userName);
                
                auth.innerHTML = `
            <div class="login-logout">
            <span>${userName}</span>
            <button class="btn logout btn-outline-danger">logout</button>
        </div>
            `

                let logout = document.querySelector(".logout")
                logout.addEventListener("click", () => {
                    localStorage.removeItem("userInfo")
                    GetLocalId()
                })
            })

    } else {
        auth.innerHTML = `<button class="btn login btn-outline-secondary">Daxil ol</button>`
        let login = document.querySelector(".login")
        login.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    }
}

GetLocalId()


function GetProducts() {
    GetDatas(`${BaseUrl}/products`)
        .then(res => ShowProducts(res.datas))
}
function ShowProducts(products) {
    products.forEach(product => {
        container.innerHTML += `
         <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.brand}</h5>
            <p class="card-text">
            ${product.model}</p>
            ${product.year}</p>
            ${product.price}</p>
            ${product.operatingSystem}</p>

            <a href="#" class="btn btn-primary" data-id=${product.id}>details</a>
            <button class="btn btn-outline-danger" data-id=${product.id}><i class="fa-solid fa-heart"></i></button>
          </div>
        </div>
        `
        // let favBtns = document.querySelectorAll(".fav")
        // favBtns.forEach(favBtn => {
        //     favBtn.addEventListener("click", () => {
        //         let userInfo = JSON.parse(localStorage.getItem("userInfo"))
        //         if (!userInfo) {
        //             alert("login olmadiginiz ucun wishliste mehsul ata bilmersiz")
        //         } else {
        //             let prodId = favBtn.getAttribute("data-id")
        //             let userId = userInfo
        //             AddFavorites(userId, prodId)
        //         }
        //     })
        // })
    });
}
GetProducts()