import { GettAllCategories, GetCategoriesById,PostCategories ,UpdateCategory,DeleteCategory} from "./api/Requests/categories.js";
import BaseURL from "./api/baseURL.js";

let container = document.querySelector(".container");
let addForm =  document.querySelector('.add-form')
let categoryName = document.querySelector('#categoryName')
let categoryDescription = document.querySelector('#categoryDescription') 
let editCategoryname = document.querySelector('#edit-categoryName')
let editCategorydescription = document.querySelector('#edit-categoryDescription')
function GetData() {
    GettAllCategories(BaseURL)
        .then(res => ShowCategories(res.categories))
        .catch(err => console.error("Error fetching categories:", err));    
}

GetData();

function ShowCategories(array) {
    container.innerHTML = ""; 

    array.forEach((element) => {
        container.innerHTML += `
            <div class="card" style="width: 18rem; margin: 10px;">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-body-secondary">${element.name}</h6>
                    <p class="card-Desc">${element.description}</p>
                   <a href="details.html?id=${element.id}" class="btn btn-primary rounded">Detail</a>
                
                    <button class="btn btn-warning rounded btn-edit" data-id=${element.id}>Edit</button>
                    <button class="btn btn-danger rounded btn-delete" data-id=${element.id}>Delete</button>
                </div>
            </div>
        `;
        let editBtns = document.querySelectorAll('.btn-edit')
        editBtns.forEach(editBtn =>{
            editBtn.addEventListener('click',()=>{
                let id = editBtn.getAttribute('data-id')
                EditCategory(id);
                
            })
        })
        let deleteBtns=document.querySelectorAll(".btn-delete")
        deleteBtns.forEach(deleteBtn=>{
            deleteBtn.addEventListener("click",()=>{
                let id=deleteBtn.getAttribute("data-id")
                DeleteCategoriesById(id)
            })
        })
    });


}
function DeleteCategoriesById(id){
    DeleteCategory(BaseURL,id)
    .then(()=>GetData())
}
// console.log(addForm);

addForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    let newCategories = {
        name:categoryName.value,
        description:categoryDescription.value

    }
    console.log(newCategories);
    PostCategories(BaseURL,newCategories)
    .then(()=>GetData());
    
        
})

// Modal elements
// const editCategoryname = document.getElementById("edit-categoryName");
// const editCategorydescription = document.getElementById("edit-categoryDescription");
const editForm = document.querySelector(".edit-form");
const closeModalButton = document.querySelector(".modal-footer .btn-secondary");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function openModal() {
    modal.style.display = "block";
    modal.classList.add("show")
    overlay.style.display = "block";
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal.style.display = "none";
    modal.classList.remove("show");
    overlay.style.display = "none"; ;

    document.body.classList.remove("modal-open");
}

function EditCategory(id) {
    GetCategoriesById(BaseURL, id)
        .then(res => {
            editCategoryname.value = res.categories.name; 
            editCategorydescription.value = res.categories.description;

            openModal();

            editForm.onsubmit = null;

            editForm.onsubmit = (e) => {
                e.preventDefault(); 
                const updatedCategory = {
                    name: editCategoryname.value, 
                    description: editCategorydescription.value, 
                };

       
                UpdateCategory(BaseURL, id, updatedCategory)
                    .then(() => {
                        GetData();
                        closeModal(); 
                    })
                    .catch(err => {
                        console.error("Error updating category:", err);
                        alert("An error occurred while updating the category.");
                    });
            };
        })
        .catch(err => {
            console.error("Error fetching category by ID:", err);
            alert("An error occurred while fetching category details.");
        });
}


closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
});

window.addEventListener("click", (e) => {
    if (e.target === modal || e.target === overlay) {
        closeModal();
    }
});
