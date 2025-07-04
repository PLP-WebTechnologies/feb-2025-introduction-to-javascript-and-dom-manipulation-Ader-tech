document.getElementById("changeTextBtn").addEventListener("click", function () {
  const paragraph = document.getElementById("textParagraph");
  paragraph.textContent = "The text has been updated via JavaScript!";
});

document.getElementById("changeStyleBtn").addEventListener("click", function () {
  const title = document.getElementById("mainTitle");
  title.style.color = "darkblue";
  title.style.backgroundColor = "#e0f0ff";
  title.style.padding = "10px";
});

document.getElementById("addBoxBtn").addEventListener("click", function () {
  const box = document.createElement("div");
  box.className = "box";
  box.textContent = "New Box";
  document.getElementById("boxContainer").appendChild(box);
});

document.getElementById("removeBoxBtn").addEventListener("click", function () {
  const container = document.getElementById("boxContainer");
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
});
