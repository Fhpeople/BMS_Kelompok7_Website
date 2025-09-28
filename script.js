document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const modal = document.getElementById("popupModal");
  const popupImg = document.getElementById("popupImg");
  const popupText = document.getElementById("popupText");

  circles.forEach(circle => {
    circle.addEventListener("click", () => {
      const img = circle.getAttribute("data-img");
      const text = circle.getAttribute("data-text");

      popupImg.src = img;
      popupText.textContent = text;

      modal.style.display = "flex";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});