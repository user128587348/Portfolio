// 1. Grab your elements from the DOM
const portfolioLogo = document.getElementById('typing-text');
const heroSubtext = document.getElementById('typing-subtext'); // Element on index.html

// 2. Only run the typewriter if the element actually exists on the current page!
if (portfolioLogo) {
    // Put your exact typing function name here for the logo
    typeWriterEffect(portfolioLogo, "projects", 100); 
}
// Your actual reusable typewriter function structure looks something like this:
function typeWriterEffect(element, text, speed) {
    let i = 0;
    element.innerHTML = ""; // Clear existing text safely
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}