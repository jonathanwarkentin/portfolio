let name = document.getElementById("nav-name");
let development = document.getElementById("nav-development");
let video = document.getElementById("nav-video");
let photo = document.getElementById("nav-photo");
let contact = document.getElementById("nav-contact");
let landingNav = document.getElementById("landing-nav");

var navChildren = [development, video, photo, contact];

name.addEventListener("mouseover", showNavItems);

function showNavItems() {
  for (i = 0; i < 4; i++) {
    navChildren[i].style.display = "block";
  }
  landingNav.addEventListener("mouseleave", hideNavItems);
  console.log("showNavItems function complete");
}

function hideNavItems() {
  for (j = 0; j < 4; j++) {
    navChildren[j].style.display = "none";
  }
  console.log("hideNavItems function complete");
}
