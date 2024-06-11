document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('Data.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const user = lines.find(line => {
                const [user, pass] = line.split(',');
                return user === username && pass === password;
            });
            if (user) {
                alert('Login successful');
                window.location.href = 'Home.html';
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
});

document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'Sign_Up_Page.html';
});

document.getElementById('facebookBtn').addEventListener('click', function() {
    window.location.href = 'Sign_Up_Page.html';
});

document.getElementById('googleBtn').addEventListener('click', function() {
    window.location.href = 'Sign_Up_Page.html';
});

document.getElementById('guestBtn').addEventListener('click', function() {
    window.location.href = 'Home.html';
});
