    document.addEventListener('DOMContentLoaded', function() {
    const friendRequestList = document.getElementById('friend-request-list');
    const notification = document.getElementById('notification');

    const friends = ['User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10'];

    function renderFriendRequests() {
        friendRequestList.innerHTML = '';
        friends.forEach(friend => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${friend}</span>
                <button class="accept-btn">Accept</button>
                <button class="deny-btn">Deny</button>
                <button class="block-btn">Block</button>
            `;
            friendRequestList.appendChild(li);
        });
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    friendRequestList.addEventListener('click', function(event) {
        if (event.target.classList.contains('accept-btn')) {
            const username = event.target.parentElement.querySelector('span').textContent;
            console.log(`${username} accepted`);
            showNotification(`${username} accepted`);
            event.target.parentElement.remove();
        } else if (event.target.classList.contains('deny-btn')) {
            const username = event.target.parentElement.querySelector('span').textContent;
            console.log(`${username} denied`);
            showNotification(`${username} denied`);
            event.target.parentElement.remove();
        } else if (event.target.classList.contains('block-btn')) {
            const username = event.target.parentElement.querySelector('span').textContent;
            console.log(`${username} blocked`);
            showNotification(`${username} blocked`);
            event.target.parentElement.remove();
            addBlockedUser(username);
        }
    });

    renderFriendRequests();

    // Add event listeners for features under work
    document.querySelectorAll('.feature-work').forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Sorry feature under work!');
        });
    });
});

// Function to add blocked users to localStorage for simplicity
function addBlockedUser(username) {
    let blockedUsers = JSON.parse(localStorage.getItem('blockedUsers')) || [];
    if (!blockedUsers.includes(username)) {
        blockedUsers.push(username);
        localStorage.setItem('blockedUsers', JSON.stringify(blockedUsers));
    }
}

// Function to get blocked users from localStorage
function getBlockedUsers() {
    return JSON.parse(localStorage.getItem('blockedUsers')) || [];
}
