import BaseURL from "./api/baseurl.js";
import { GetUsersById, UpdateUser } from "./api/requests/users.js";


let editForm = document.querySelector('.edit-form');
let editName = document.querySelector('#edit-name');
let editSurname = document.querySelector('#edit-surname');
let editAge = document.querySelector('#edit-age');
let editGrade = document.querySelector('#edit-grade');


const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');



function loadUserData(id) {
    GetUsersById(`${BaseURL}/users`, id)
        .then(res => {
            editName.value = res.users.name;
            editSurname.value = res.users.surname;
            editAge.value = res.users.age;
            editGrade.value = res.users.grade;
        })
        .catch(err => console.error("Error fetching user data:", err));
}


function updateUser(id) {
    editForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const updatedUser = {
            name: editName.value,
            surname: editSurname.value,
            age: editAge.value,
            grade: editGrade.value
        };

        UpdateUser(`${BaseURL}/users`, id, updatedUser)
            .then(() => {
                alert("User updated successfully!");
                window.location = "index.html"; 
            })
            .catch(err => console.error("Error updating user:", err));
    });
}


if (userId) {
    loadUserData(userId);
    updateUser(userId);
} else {
    console.error("No user ID found in URL.");
}
