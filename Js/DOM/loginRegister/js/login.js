const loginForm = document.querySelector('.login-form');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#loginPassword');
const signUpButton = document.querySelector('#SignUp');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchingUser = users.find(user => user.username === username && user.password === password);

    if (matchingUser) {
        alert(`successful`);
        console.log('Successful login:', matchingUser);

        localStorage.setItem('loggedInUser', JSON.stringify(matchingUser));

        window.location.href = 'index.html'; 
    } else {
        alert('Incorrect username or password');
    }
});

signUpButton.addEventListener('click', function () {
    window.location.href = 'register.html'; 
});
