document.addEventListener("DOMContentLoaded", () => {
  const targetElement = document.getElementById("typing-text");
  
  // The phrase to type out. Using HTML allows us to keep your orange color class!
  const textToType = '<span class="orange">Contact me</span>';
  
  let index = 0;
  let currentOutput = "";

  function typeEffect() {
    // If the next part of the string is an HTML tag, inject the whole tag instantly
    if (textToType.charAt(index) === "<") {
      const closingTagIndex = textToType.indexOf(">", index);
      currentOutput += textToType.substring(index, closingTagIndex + 1);
      index = closingTagIndex + 1;
    } else {
      // Otherwise, inject just a single normal text letter
      currentOutput += textToType.charAt(index);
      index++;
    }

    // Update the text on the screen
    targetElement.innerHTML = currentOutput;

    // Loop speed controller: 75 milliseconds per letter typing speed
    if (index < textToType.length) {
      setTimeout(typeEffect, 75);
    }
  }

  // Starts the typing timeline sequence after a tiny 300ms initial page load pause
  if (targetElement) {
    setTimeout(typeEffect, 300);
  }
});