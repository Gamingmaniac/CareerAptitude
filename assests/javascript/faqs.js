
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
