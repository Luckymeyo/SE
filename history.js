document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('save-btn');
    const deleteHistoryBtn = document.getElementById('delete-history-btn');
    const notification = document.getElementById('notification');

    saveBtn?.addEventListener('click', function() {
        // Simulate saving settings
        console.log('Information saved');

        // Display notification
        notification.textContent = 'Information saved';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });

    deleteHistoryBtn?.addEventListener('click', function() {
        // Simulate deleting history
        console.log('History deleted');
        
        // Clear history textarea
        const historyTextarea = document.getElementById('history');
        historyTextarea.value = '';

        // Display notification
        notification.textContent = 'History deleted';
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
