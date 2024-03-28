var stickyBlock = document.querySelector(".sticky-block");
var viewOffersBlock = document.querySelector(".view-offers");
var stickyBlockTop = stickyBlock.offsetTop;
var lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= stickyBlockTop) {
    stickyBlock.classList.add("sticky");
    // Check if scrolling down
    if (scrollPosition > lastScrollPosition) {
      viewOffersBlock.style.display = "none";
    } else {
      viewOffersBlock.style.display = "block";
    }
  } else {
    stickyBlock.classList.remove("sticky");
    viewOffersBlock.style.display = "block";
  }

  lastScrollPosition = scrollPosition;
});