// this is the code for the page 1 typing effect


document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Given the tourism volume, investment in infrastructure, community engagement programs and overall economy within Chinatown, what factors have contributed to either positive or negative outcomes for the city?";
  const textElement = document.getElementById("typing-text");
  const focusButton = document.getElementById("focus-button");
  const sentences = text.split(". ");
  let sentenceIndex = 0;
  let chunkIndex = 0;

  function type() {
    if (sentenceIndex < sentences.length) {
      const sentence = sentences[sentenceIndex];
      if (chunkIndex < sentence.length) {
        const chunk = sentence.slice(chunkIndex, chunkIndex + 8);
        textElement.innerHTML += chunk;
        chunkIndex += 8;
        setTimeout(type, 100); // Adjust the typing speed here (100ms in this example)
      } else {
        textElement.innerHTML += ".<br><br>";
        chunkIndex = 0;
        sentenceIndex++;
        setTimeout(type, 1000); // Delay before moving to the next sentence
      }
    } else {
      focusButton.classList.remove("blur"); // Remove the blur effect from the button
    }
  }

  type(); // Start the typing effect when the page loads
});
