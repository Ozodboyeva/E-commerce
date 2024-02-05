document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader-wrapper");
  // Loader
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }, 700);
});
