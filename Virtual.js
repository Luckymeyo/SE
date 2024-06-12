document.addEventListener('DOMContentLoaded', () => {
    const videoUrl = localStorage.getItem('selectedVideo');
    if (videoUrl) {
        const videoDisplay = document.getElementById('videoDisplay');
        videoDisplay.src = videoUrl;
        videoDisplay.load();
    } else {
        console.error('No video URL found in localStorage.');
    }

    document.getElementById('postComment').addEventListener('click', () => {
        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentList = document.getElementById('commentsList');
            const commentItem = document.createElement('div');
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = '';
        }
    });

    document.getElementById('likeButton').addEventListener('click', () => {
        alert('You liked the video!');
    });

    document.getElementById('dislikeButton').addEventListener('click', () => {
        alert('You disliked the video!');
    });
});
