window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});


let maining = document.querySelector('.slider img'); 
let images = ['assets/images/happyclient1.jpg', 'assets/images/happyclient2.jpg']; 
let num = 0;
const auto = true;
const intervalTime = 5000;
let slideInterval;

function next() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    maining.src = images[num];
}

function back() {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    maining.src = images[num];
}

if (auto) {
    slideInterval = setInterval(next, intervalTime);
}


const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    num = index;
    maining.src = images[num];
    updateActiveDot();
}

function updateActiveDot() {
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === num);
    });
}

dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        showSlide(index);
    });
});

updateActiveDot();


function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isActive = element.classList.contains("active");

    document.querySelectorAll(".accordion-header").forEach(header => {
        header.classList.remove("active");
        header.nextElementSibling.style.maxHeight = null;
    });

    if (!isActive) {
        element.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px"; 
    }
}


document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from actually submitting

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const imageFile = document.getElementById('profileImage').files[0];

    if (name && age) {
        // Save data to localStorage
        const userData = {
            name: name,
            age: age,
            imageFileName: imageFile ? imageFile.name : null
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = `
            <h3>${name}</h3>
            <p>Age: ${age}</p>
            ${imageFile ? `<img src="${URL.createObjectURL(imageFile)}" alt="${name}'s Image" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 10px;">` : ''}
        `;

        card.innerHTML = cardContent;

        // Add the card to the output div
        const output = document.getElementById('output');
        output.innerHTML = ''; // Clear previous content
        output.appendChild(card);
    } else {
        alert('Please fill out all required fields.');
    }
});

// Load data from localStorage on page load
window.addEventListener('load', function () {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
        const { name, age, imageFileName } = JSON.parse(savedData);

        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = `
            <h3>${name}</h3>
            <p>Age: ${age}</p>
            ${imageFileName ? `<img src="#" alt="${name}'s Image (Previously uploaded)" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 10px;">` : ''}
        `;

        card.innerHTML = cardContent;

        // Add the card to the output div
        const output = document.getElementById('output');
        output.innerHTML = ''; // Clear previous content
        output.appendChild(card);
    }
});