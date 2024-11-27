const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const welcomeMessage = document.getElementById('welcomeMessage');
const notLoggedInMessage = document.getElementById('notLoggedInMessage');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');

if (loggedInUser) {
    welcomeMessage.textContent = `Hello, ${loggedInUser.username}!`;
    notLoggedInMessage.style.display = 'none';
    loginButton.style.display = 'none';
    logoutButton.style.display = 'inline-block';
} else {
    welcomeMessage.style.display = 'none';
    notLoggedInMessage.style.display = 'inline-block';
    loginButton.style.display = 'inline-block';
    logoutButton.style.display = 'none';
}

loginButton.addEventListener('click', () => {
    window.location.href = 'login.html'; 
});

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.reload();
});
