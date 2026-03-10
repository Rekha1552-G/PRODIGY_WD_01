/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* MOBILE MENU */

let toggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");

toggle.onclick = function () {
  menu.classList.toggle("show");
};

/* ADOPT BUTTON FUNCTION */

function adoptPet(name) {
  alert(
    "Thank you for choosing to adopt " +
      name +
      " 🐾. Our team will contact you soon!"
  );
}
