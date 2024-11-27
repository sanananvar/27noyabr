import BaseUrl from "./api/baseurl.js"
import { PostData, GetDatas } from "./api/requests/requests.js"

let registerForm = document.querySelector(".register-form")
let regUsername = document.querySelector("#register-username")
let regEmail = document.querySelector("#register-email")
let regPassword = document.querySelector("#register-password")



registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newUser = {
        username: regUsername.value,
        email: regEmail.value,
        password: regPassword.value
    }



    console.log(newUser);

    GetDatas(`${BaseUrl}/users`)
        .then(res => {
            let users = res.datas || res
            console.log(users);
            
            let findedUser = users.find(user => user.email == newUser.email)      
            if (findedUser) {
                alert("Bu email artiq qeydiyyatdan kecirilib")
            } else {

                PostData(`${BaseUrl}/users`, newUser)
                    .then(() => {
                        window.location.href = "login.html"
                    })
            }
        })


})