let name = document.getElementById("nav-name");
let development = document.getElementById("nav-development");
let video = document.getElementById("nav-video");
let photo = document.getElementById("nav-photo");
let contact = document.getElementById("nav-contact");
let landingNav = document.getElementById("landing-nav");

var navChildren = [development, video, photo, contact];

name.addEventListener("mouseenter", showNavItems);

function showNavItems() {
  for (i = 0; i < 4; i++) {
    showItem(navChildren[i]);
  }
  name.addEventListener("mouseenter", refreshItems);
  landingNav.addEventListener("mouseleave", hideNavItems);
  console.log("showNavItems function complete");
}

function hideNavItems() {
  for (j = 0; j < 4; j++) {
    navChildren[j].style.display = "none";
  }
  console.log("hideNavItems function complete");
}

function hideOtherItems(currentItem) {
  for (k = 0; k < 4; k++) {
    if (navChildren[k] !== currentItem) {
      navChildren[k].style.display = "none";
      console.log("hide " + navChildren[k]);
    }
  }
  console.log("hideOtherItems function complete");
}

function refreshItems() {
  for (m = 0; m < 4; m++) {
    navChildren[m].style.display = "block";
  }
  console.log("refreshItems function complete");
}

function showItem(currentItem) {
  currentItem.style.display = "block";
  currentItem.addEventListener("mouseenter", function() {
    hideOtherItems(currentItem);
  });
}
