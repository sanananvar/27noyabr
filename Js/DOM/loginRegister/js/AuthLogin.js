const registerForm = document.querySelector('.register-form');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const loginAssignButton = document.querySelector('#LoginAssign');

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();
    const userData = {
      username,
      password, 
    };

    let users = JSON.parse(localStorage.getItem('users')) || []; 
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    console.log('User registered:', userData);
    alert('Registration successful');

    window.location.href = 'login.html';

    registerForm.reset();
});

loginAssignButton.addEventListener('click', function() {
    window.location.href = 'login.html';
});
