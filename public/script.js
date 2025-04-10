document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".folding-header");

  headers.forEach(header => {
    const content = header.nextElementSibling;

    if (content && content.classList.contains("folding-content")) {
      header.addEventListener("click", () => {
        content.classList.toggle("hidden");
        header.classList.toggle("folded");
      });
    }
  });
});
