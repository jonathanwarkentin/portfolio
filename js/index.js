var name = document.getElementById("nav-name");
var development = document.getElementById("nav-development");
var video = document.getElementById("nav-video");
var photo = document.getElementById("nav-photo");
var contact = document.getElementById("nav-contact");

var navChildren = [development, video, photo, photo, contact];

function showNavItems() {
  for (i = 0; i < 5; i++) {
    navChildren[i].style.display = "block";
  }
}

name.addEventListener("mouseenter", showNavItems());
