import { GetUsersById } from "./api/requests/users.js";
import BaseURL from "./api/baseurl.js";

let id = new URLSearchParams(window.location.search).get("id")

let detailContainer=document.querySelector('.detail-container')

GetUsersById(`${BaseURL}/users`,id)
.then(res=>ShowAllUsers(res.users))


function ShowAllUsers(obj) {
    console.log(obj)

    detailContainer.innerHTML=`<div class="details">
            <span id="userName"><b>name</b>:${obj.name}</span>
            <span id="userSurname"><b>surname</b>:${obj.surname}</span>
            <span id="userAge"><b>age</b>:${obj.age}</span>
            <span id="userGrade"><b>grade</b>:${obj.grade}</span>
            <a href="index.html" class="btn btn-warning rounded ">back</a>
            
            </div>
            
        </div>  `


    
}