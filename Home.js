   document.addEventListener('DOMContentLoaded', () => {
            const questionButtons = document.querySelectorAll('.question-btn');
            questionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const answer = button.nextElementSibling;
                    if (answer.style.display === 'block') {
                        answer.style.display = 'none';
                        answer.style.maxHeight = null;
                    } else {
                        answer.style.display = 'block';
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    }
                });
            });

            // Add click event listeners for user profile and customize
            document.getElementById('userProfile').addEventListener('click', () => {
                window.location.href = 'customize-account-setting.html';
            });

            document.getElementById('customize').addEventListener('click', () => {
                window.location.href = 'customize-account-setting.html';
            });
        });
