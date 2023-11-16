function startAnimation(buttonId) {
  var container = document.getElementById("animationContainer");
  var gifs = document.querySelectorAll("#animationContainer img");
  var rectangle = document.getElementById("rectangle");
  var detailsParagraph = document.getElementById("detailsParagraph");

  function createSpaces(numberOfSpaces) {
    return "&nbsp;".repeat(numberOfSpaces);
  }

  // Hide all GIFs before showing the new one
  gifs.forEach(function (gif) {
    gif.style.display = "none";
  });

  // Show the selected GIF
  var gifToShow = document.querySelector(
    `#gifAnimation[src="gif/${buttonId}.gif"]`
  );
  if (gifToShow) {
    gifToShow.style.display = "block";
  }

  // Set the rectangle to the default style before applying new styles
  rectangle.className = "rectangle";
  rectangle.style.display = "block"; // Show the rectangle
  detailsParagraph.style.display = "none";

  switch (buttonId) {
    case "m9":
      rectangle.style.backgroundColor = "#4F2A5F";
      rectangleText.innerHTML =
        "Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        "31,227";
      rectangleText.style.color = "#FFFFFF";
      break;
    case "m14a":
      rectangle.style.backgroundColor = "#448B80";
      rectangleText.innerHTML =
        "Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        "57,301";
      rectangleText.style.color = "#FFFFFF";
      break;
    case "m15":
      rectangle.style.backgroundColor = "#0A69AE";
      rectangleText.innerHTML =
        "Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        "83,710";
      rectangleText.style.color = "#FFFFFF";
      break;
    case "m15s":
      rectangle.style.backgroundColor = "#0b73be";
      rectangleText.innerHTML =
        "Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        "151,436";
      rectangleText.style.color = "#FFFFFF";
      break;
    case "m22":
      rectangle.style.backgroundColor = "#1CC2D8";
      rectangleText.innerHTML =
        "Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        "11,135";
      rectangleText.style.color = "#FFFFFF";
      break;
    case "m55":
      rectangle.style.backgroundColor = "#8EC3A4";
      rectangleText.innerHTML =
        "Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        "8,143";
      rectangleText.style.color = "#FFFFFF";
      break;
    case "m103":
      rectangle.style.backgroundColor = "#4F2A5F";
      rectangleText.innerHTML =
        "Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        "49,945";
      rectangleText.style.color = "#FFFFFF";
      break;
    case "all":
      rectangle.style.backgroundColor = "#FFFFFF";
      rectangleText.innerHTML =
        "Total Average Monthly Bus Ridership (2021)" +
        createSpaces(5) +
        "-" +
        createSpaces(5) +
        " 392,897";
      rectangleText.style.color = "#000000";
      // detailsParagraph.classList.remove('typewriter');
      // void detailsParagraph.offsetWidth; // Trigger a DOM reflow
      // detailsParagraph.classList.add('typewriter');
      detailsParagraph.style.display = "block";
      break;
  }

  // Show the animation container and start the animation
  container.style.display = "flex";
  container.classList.add("animate");

  // Reset the animation to its original state after it ends
  container.addEventListener(
    "animationend",
    function () {
      container.classList.remove("animate");
    },
    { once: true }
  );
}
