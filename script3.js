document.addEventListener("DOMContentLoaded", function() {
    const learnerOption = document.getElementById('learner');
    const teacherOption = document.getElementById('teacher');
    const nextButton = document.getElementById('nextButton');

    let selectedProfile = null;

    learnerOption.addEventListener('click', function() {
        selectProfile('learner');
    });

    teacherOption.addEventListener('click', function() {
        selectProfile('teacher');
    });

    function selectProfile(profile) {
        selectedProfile = profile;
        if (profile === 'learner') {
            learnerOption.classList.add('selected');
            teacherOption.classList.remove('selected');
        } else {
            teacherOption.classList.add('selected');
            learnerOption.classList.remove('selected');
        }
        nextButton.disabled = false;
    }

    nextButton.addEventListener('click', function() {
        if (selectedProfile) {
            // Save profile selection to localStorage
            localStorage.setItem('profile', selectedProfile);
            window.location.href = 'sign-up-page3.html';
        }
    });

    document.querySelector('.back-btn').addEventListener('click', function() {
        window.location.href = 'sign-up-page.html';
    });

    document.querySelector('.close-btn').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});
