let name = document.getElementById("nav-name");
let development = document.getElementById("nav-development");
let video = document.getElementById("nav-video");
let photo = document.getElementById("nav-photo");
let contact = document.getElementById("nav-contact");

var navChildren = [development, video, photo, contact];

var mousePresence = false;

name.addEventListener("mouseover", showNavItems);

function showNavItems() {
  mousePresence = true;
  for (i = 0; i < 4; i++) {
    navChildren[i].style.display = "block";
    navChildren[i].addEventListener("mouseout", canHideNav);
    navChildren[i].addEventListener("mouseover", refreshShowNav);
  }
  name.addEventListener("mouseout", canHideNav);
  name.addEventListener("mouseover", refreshShowNav);
  console.log("showNavItems function complete");
}

function hideNavItems() {
  for (j = 0; j < 4; j++) {
    navChildren[j].style.display = "none";
  }
  console.log("hideNavItems function complete");
}

async function canHideNav() {
  mousePresence = false;
  await sleep(500);
  if (!mousePresence) hideNavItems();
  console.log("canHideNav function complete");
}

function refreshShowNav() {
  mousePresence = true;
  console.log("refreshShowNav function complete");
}

//sleep function taken directly from https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
