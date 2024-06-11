document.addEventListener('DOMContentLoaded', function() {
    const questionBtns = document.querySelectorAll('.question-btn');
    
    questionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
