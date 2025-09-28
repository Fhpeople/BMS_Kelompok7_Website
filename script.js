document.addEventListener("DOMContentLoaded", function()
{
  const circles = document.querySelectorAll(".circle");
  const modal = document.getElementById("popupModal");
  const popupImg = document.getElementById("popupImg");
  const popupText = document.getElementById("popupText");

  circles.forEach(function(circle)
  {
    circle.addEventListener("click", function()
    {
      const img = circle.getAttribute("data-img");
      const text = circle.getAttribute("data-text");
      popupImg.src = img;
      popupText.textContent = text;
      modal.style.display = "flex";
    });
  });

  window.addEventListener("click", function(event)
  {
    if (event.target === modal) 
    {
      modal.style.display = "none";
    }
  });
});