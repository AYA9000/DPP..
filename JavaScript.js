document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".Titelrad");

  toggles.forEach(header => {
    header.addEventListener("click", function () {
      const content = header.nextElementSibling; // .Containern
      const arrow = header.querySelector(".Activator");

      //Visa/Dölja
      content.classList.toggle("open");

      //Rotera
      arrow.classList.toggle("rotated");
    });
  });
});
