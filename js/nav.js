window.onscroll = function() {stickyWindow()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyWindow() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}