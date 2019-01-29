let name = document.getElementById("nav-name");
let development = document.getElementById("nav-development");
let video = document.getElementById("nav-video");
let photo = document.getElementById("nav-photo");
let contact = document.getElementById("nav-contact");

var navChildren = [development, video, photo, photo, contact];

name.addEventListener("mouseover", showNavItems);
name.addEventListener("mouseout", hideNavItems);

/*
function showNavItems() {
  for (i = 0; i < 5; i++) {
    navChildren[i].style.display = "block";
  }
}
*/

function showNavItems() {
  for (i = 0; i < 5; i++) {
    navChildren[i].style.display = "block";
  }
  console.log("showNavItems function triggered");
}

function hideNavItems() {
  for (i = 0; i < 5; i++) {
    navChildren[i].style.display = "none";
  }
  console.log("hideNavItems function triggered");
}
