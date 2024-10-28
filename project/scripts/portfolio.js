const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the visibility of navigation links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
    
    // Toggle the hamburger icon
    if (hamburger.textContent === '\u2630') {
        hamburger.textContent = 'X';
    } else {
        hamburger.textContent = '\u2630';
    }
});