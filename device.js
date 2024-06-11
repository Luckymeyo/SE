document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('save-btn');
    const notification = document.getElementById('notification');

    saveBtn.addEventListener('click', function() {
        // Simulate saving device information
        console.log('Device information saved');

        // Display notification
        notification.textContent = 'Information saved';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });

    // Remove device functionality
    document.querySelectorAll('.remove-device').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    // Add event listeners for features under work
    document.querySelectorAll('.feature-work').forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Sorry feature under work!');
        });
    });
});
