document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "login-page.html";
});

document.getElementById("closeButton").addEventListener("click", function() {
    window.location.href = "login-page.html";
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Password must be 8-10 characters long and include at least one number or symbol.");
        return;
    }

    const user = {
        age: age,
        username: username,
        email: email,
        password: password
    };

    saveUser(user);

    window.location.href = "sign-up-page2.html";
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/;
    return re.test(password);
}

function saveUser(user) {
    const userData = JSON.stringify(user);
    const blob = new Blob([userData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_data.json';
    a.click();
    URL.revokeObjectURL(url);
}
