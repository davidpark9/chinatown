document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const introText = document.getElementById("intro-text");
    introText.style.opacity = "0";
    introText.style.visibility = "hidden";
  }, 6000);
});

document.addEventListener("DOMContentLoaded", () => {
  setupDraggableButton("draggable-button", true);
  setupDraggableButton("draggable-button-left", false);
  setupDraggableButton("draggable-button-right", true);
  setupDraggableButton("draggable-button-left-2", false);
});

function setupDraggableButton(buttonId, dragRight) {
  const dragItem = document.getElementById(buttonId);

  const container = document.querySelector(".container");
  const textContainer = dragItem.nextElementSibling;
  let isDragging = false;
  let startX, initialX, maxLeft, maxRight;

  function updateBoundaries() {
    let containerRect = container.getBoundingClientRect();
    let dragItemRect = dragItem.getBoundingClientRect();
    maxLeft = containerRect.left + 100;
    maxRight = containerRect.right - dragItemRect.width - 140;
  }

  window.addEventListener("resize", updateBoundaries);
  updateBoundaries();

  dragItem.addEventListener("mousedown", function (e) {
    isDragging = true;
    startX = e.pageX;
    initialX = dragItem.getBoundingClientRect().left;
    textContainer.style.visibility = "visible";
    textContainer.style.opacity = 0;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      let currentX = e.pageX;
      let translateX = currentX - startX;
      let adjustedTranslateX = dragRight
        ? Math.min(Math.max(translateX + initialX, maxLeft), maxRight) -
          initialX
        : Math.max(Math.min(translateX + initialX, maxRight), maxLeft) -
          initialX;

      dragItem.style.transform = `translateX(${adjustedTranslateX}px)`;

      let opacity = Math.min(Math.abs(adjustedTranslateX) / 100, 1);
      textContainer.style.opacity = opacity;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    if (Math.abs(dragItem.getBoundingClientRect().left - initialX) < 100) {
      setTimeout(() => {
        textContainer.style.visibility = "hidden";
        textContainer.style.opacity = 0;
      }, 500);
    }
  });
}

console.log(document.getElementById("hello-world"));
