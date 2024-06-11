function goToLogin() {
    window.location.href = "login-page.html";
}

// Signup form validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate age
    if (!age || isNaN(age)) {
        alert('Please enter a valid age.');
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If all validations pass, go to the next page
    window.location.href = 'sign-up-page2.html';
});

// Profile selection for sign-up page 2
let selectedProfile = null;

function goBack() {
    window.location.href = "sign-up-page.html";
}

function selectProfile(profile) {
    selectedProfile = profile;
    
    // Remove selected class from both options
    document.getElementById('learner').classList.remove('selected');
    document.getElementById('teacher').classList.remove('selected');

    // Add selected class to the clicked option
    document.getElementById(profile).classList.add('selected');

    // Enable the next button
    document.getElementById('nextButton').disabled = false;
}

function goToNext() {
    if (selectedProfile) {
        window.location.href = "sign-up-page3.html";
    }
}
