document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById('nextButton');

    nextButton.addEventListener('click', function() {
        window.location.href = 'Home.html';  // Redirect to Home.html
    });

    document.querySelector('.back-btn').addEventListener('click', function() {
        window.location.href = 'sign-up-page2.html';
    });

    document.querySelector('.close-btn').addEventListener('click', function() {
        window.location.href = 'Home.html';
    });
});
