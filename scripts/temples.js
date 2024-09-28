const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = "Last Modification: " + lastModified;



const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  if (hamburger.textContent === '\u2630') {
    hamburger.textContent = 'X';
  } else {
    hamburger.textContent = '\u2630';
  }
});
