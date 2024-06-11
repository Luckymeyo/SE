document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('save-btn');
    const notification = document.getElementById('notification');

    saveBtn.addEventListener('click', function() {
        // Simulate saving user information
        const username = document.getElementById('username').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const country = document.getElementById('country').value;
        const birthdate = document.getElementById('birthdate').value;

        // Here, you would typically send this data to the server
        console.log('Saving user information', {
            username, phoneNumber, email, address, country, birthdate
        });

        // Display notification
        notification.textContent = 'Information saved';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });

    // Add event listeners for features under work
    document.querySelectorAll('.feature-work').forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Sorry feature under work!');
        });
    });
});
