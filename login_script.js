document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const fbButton = document.getElementById('fbButton');
    const googleButton = document.getElementById('googleButton');
    const guestButton = document.getElementById('guestButton');

    loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            window.location.href = 'home.html';
        } else {
            alert('Please fill in both Username and Password');
        }
    });

    registerButton.addEventListener('click', function() {
        window.location.href = 'sign-up-page.html';
    });

    fbButton.addEventListener('click', function() {
        window.location.href = 'sign-up-page.html';
    });

    googleButton.addEventListener('click', function() {
        window.location.href = 'sign-up-page.html';
    });

    guestButton.addEventListener('click', function() {
        window.location.href = 'home.html';
    });
});
