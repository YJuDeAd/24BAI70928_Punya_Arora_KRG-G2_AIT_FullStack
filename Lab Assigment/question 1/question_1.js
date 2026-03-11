document.getElementById('post-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const successMessage = document.getElementById('success-message');
    const form = document.getElementById('post-form');

    try {
        const response = await fetch('/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body })
        });

        successMessage.style.display = 'block';
        form.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    } catch (error) {
        console.error('Network error:', error);
        alert('A network error occurred. Is the server running?');
    }
});