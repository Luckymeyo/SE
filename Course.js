document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('videoUpload').click();
});

document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'video/mp4') {
        const url = URL.createObjectURL(file);
        const videoSlot = document.querySelector(`.video-slot:not(.occupied)`);
        if (videoSlot) {
            videoSlot.classList.add('occupied');
            const videoElement = document.createElement('video');
            videoElement.src = url;
            videoElement.controls = true;
            videoSlot.appendChild(videoElement);
            videoSlot.addEventListener('click', () => {
                localStorage.setItem('selectedVideo', url);
                window.location.href = 'Virtual.html';
            });
        }
    }
});
