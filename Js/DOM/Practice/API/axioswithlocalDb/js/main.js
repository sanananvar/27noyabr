import BaseURL from "./api/baseurl.js";
import Base from "./api/baseurl.js";
import {  GetAllUsers, GetUsersById, UpdateUser, userPost,DeleteUser } from "./api/requests/users.js";


function GetData() {
  GetAllUsers(`${Base}/users`)
    .then(res => ShowAllUsers(res.users))
    .catch(err => console.log(err))


}
GetData()
let container = document.querySelector(".container")

function ShowAllUsers(array) {
  array.forEach(element => {
    container.innerHTML += `<div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">name:${element.name}</li>
                <li class="list-group-item">surname : ${element.surname}</li>
                <li class="list-group-item">age :${element.age}</li>
                <li class="list-group-item">grade : ${element.grade}</li>
                <div class="btn-wrapper"><a href="detail.html?id=${element.id}" class="btn btn-primary rounded">Detail</a>
                
                    <button class="btn btn-warning rounded btn-edit" data-id=${element.id}>Edit</button>
                    <button class="btn btn-danger rounded btn-delete" data-id=${element.id}>Delete</button></div>


            </ul>
        </div>`;
        let editBtns = document.querySelectorAll('.btn-edit')
        editBtns.forEach(editBtn =>{
            editBtn.addEventListener('click',()=>{
                let id = editBtn.getAttribute('data-id')
                editUser(id);
                window.location="edit.html?id="+id
                
            })
        });
        let deleteBtns=document.querySelectorAll(".btn-delete")
        deleteBtns.forEach(deleteBtn=>{
            deleteBtn.addEventListener("click",()=>{
                let id=deleteBtn.getAttribute("data-id")
                DeleteUsersById(id)
            })
        })


  })
}

let addform = document.querySelector("#add-form")
let addName = document.querySelector("#add-name")
let addSurname = document.querySelector("#add-surname")
let addAge = document.querySelector("#add-age")
let addGrade = document.querySelector("#add-grade")


addform.addEventListener('submit', (e) => {
  e.preventDefault()

  let newUsers = {
    name: addName.value,
    surname: addSurname.value,
    age: addAge.value,
    grade: addGrade.value
  }
  console.log(newUsers);

  userPost(`${Base}/users`, newUsers)
    .then(() => GetData())

})

let editForm = document.querySelector('.edit-form')
let editName = document.querySelector('#edit-name')
let editSurname = document.querySelector('#edit-surname')
let editAge = document.querySelector('#edit-age')
let editGrade = document.querySelector('#edit-grade')

function editUser(id){

  GetUsersById(`${BaseURL}/users`,id)
  .then(res=>{

   editName.value=res.users.name,
   editSurname.value=res.users.surname,
   editAge.value=res.users.age,
   editGrade.value=res.users.grade

   

   editForm.addEventListener("submit",(e)=>{
       e.preventDefault()

       let UpdatedUser={
           name:editName.value,
           surname:editSurname.value,
           editAge:editAge.value,
           editGrade:editGrade.value
       }
       
       UpdateUser(`${BaseURL}/users`,id,UpdatedUser)
       .then(()=>{
           GetData()
       })
   })


  })
}


function DeleteUsersById(id){
  DeleteUser(`${BaseURL}/users`,id)
  .then(()=>GetData())
}

let searchInput = document.querySelector('#search-input');

// Add event listener to the search input
searchInput.addEventListener('input', (e) => {
    let query = e.target.value.toLowerCase(); // Get the search query
    filterUsers(query); // Filter users
});

function filterUsers(query) {
    // Clear the container
    container.innerHTML = '';

    // Get all users again and filter them
    GetAllUsers(`${Base}/users`)
        .then(res => {
            let filteredUsers = res.users.filter(user => 
                user.name.toLowerCase().includes(query) || 
                user.surname.toLowerCase().includes(query)
            );
            ShowAllUsers(filteredUsers); // Display filtered users
        })
        .catch(err => console.log(err));
}
