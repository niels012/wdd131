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

function handleFormSubmit() {

    // Increment review count in localStorage
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviewCount += 1;
    localStorage.setItem("reviewCount", reviewCount);

    let inputName = document.getElementById('name');
    localStorage.setItem("Name", inputName.value);

    let inputEmail = document.getElementById('email')
    localStorage.setItem("Email", inputEmail.value)




    const EmailSpan = document.getElementById("user-email");
    const storedEmail = localStorage.getItem("Email");
    if (storedEmail != "") {
        EmailSpan.textContent = storedEmail;
    }


  }
