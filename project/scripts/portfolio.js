document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) { // Check if elements exist
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show-links');

            // Toggle the hamburger icon
            if (hamburger.textContent === '\u2630') {
                hamburger.textContent = 'X';
            } else {
                hamburger.textContent = '\u2630';
            }

            // Update aria-expanded attribute
            hamburger.setAttribute('aria-expanded', navLinks.classList.contains('show-links'));
        });
    } else {
        console.error("Elements with ID 'hamburger' or 'nav-links' were not found in the DOM.");
    }
});
