const stickyBlock = document.querySelector(".sticky-block");
const viewOffersBlock = document.querySelector(".view-offers");
const footer = document.querySelector(".footer");
const stickyBlockTop = stickyBlock.offsetTop;
const footerTop = footer.offsetTop;
let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  console.log(lastScrollPosition, " => lastScrollPosition");
  console.log(scrollPosition, " => scrollPosition");

  if (scrollPosition >= stickyBlockTop) {
    stickyBlock.classList.add("sticky");
  } else {
    stickyBlock.classList.remove("sticky");
    viewOffersBlock.style.display = "block";
  }

  if (scrollPosition - 150 >= footerTop) {
    stickyBlock.classList.remove("sticky");
  }

    // if (stickyBlock.classList.contains("sticky")) {
    //   if (scrollPosition > lastScrollPosition) {
    //     viewOffersBlock.style.display = "none";
    //   } else {
    //     viewOffersBlock.style.display = "block";
    //   }
    // }

  lastScrollPosition = scrollPosition;
});
