document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Simulate sending and show confirmation
    document.getElementById('result').style.display = 'block';
    // Optionally clear form
    this.reset();
});