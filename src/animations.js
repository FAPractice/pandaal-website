window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const height = window.innerHeight;

  if (window.scrollY < height) {
    header.classList.add("bright");
  } else {
    header.classList.remove("bright");
  }
});
