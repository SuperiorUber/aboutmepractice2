//Scroll Function, Navbar decreases size

let navb = document.getElementById("navbar");
let scrollBtn = document.getElementById("scrollBTN");

window.onscroll = function () {
  scrollsfunction();
};
function scrollsfunction() {
  if (document.documentElement.scrollTop > 1) {
    navb.style.height = "50px";
    navb.style.fontSize = "15px";
    navb.style.borderBottom = "1px solid rgba(255, 115, 0, 0.856)"
    scrollBtn.style.display = "flex"
  } else {
    navb.style.height = "80px";
    navb.style.fontSize = "20px";
    navb.style.borderBottom = "none"
    scrollBtn.style.display = "none"
  }
}
