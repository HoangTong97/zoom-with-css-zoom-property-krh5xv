// Import stylesheets
import "./style.css";

const textContent: HTMLElement = document.getElementById("textContent");
const btnZoomIn: HTMLElement = document.getElementById("zoomIn");
const btnZoomOut: HTMLElement = document.getElementById("zoomOut");

let zoomLevel = 1;

btnZoomIn.addEventListener("click", () => {
  if (zoomLevel < 2) {
    zoomLevel = zoomLevel + 0.1;
    textContent.style.zoom = `${zoomLevel}`;
  }
});
btnZoomOut.addEventListener("click", () => {
  if (zoomLevel > 1) {
    zoomLevel = zoomLevel - 0.1;
    textContent.style.zoom = `${zoomLevel}`;
  }
});
