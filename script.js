const spotlightTargets = document.querySelectorAll(".spotlight-target");

spotlightTargets.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    item.style.opacity = "";
  });
});
