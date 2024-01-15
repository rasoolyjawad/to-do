document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= window.innerHeight) {
      document.body.classList.add("gray-background");
    } else {
      document.body.classList.remove("gray-background");
    }
  });
});
