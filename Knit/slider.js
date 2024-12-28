let gridSizeSlider = document.getElementById("gridSizeSlider");
let gridSizeValue = document.getElementById("gridSizeValue");

gridSizeSlider.oninput = function() {
  gridSizeValue.textContent = this.value;
  gridSize = parseInt(this.value); // Update gridSize variable in KnitPattern2.js
  redrawCanvas(); // Call the setup function to redraw the canvas with the new grid size
};