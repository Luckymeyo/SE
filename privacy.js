document.addEventListener('DOMContentLoaded', function() {
    const savePrivacyBtn = document.getElementById('save-privacy-btn');
    const notification = document.getElementById('notification');

    savePrivacyBtn?.addEventListener('click', function() {
        // Simulate saving privacy settings
        console.log('Privacy settings saved');

        // Display notification
        notification.textContent = 'Privacy settings saved';
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
