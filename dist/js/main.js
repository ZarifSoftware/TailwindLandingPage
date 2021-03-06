/*
    Steps for build the navbar animates on scroll
    
    1 - Prepare the elements for animation -> Done
    2 - Grab some elements related to logic -> Done
    3 - We have to use window.scroll to handle the scrolling -> Done
    4 - Build the logic -> Done
*/

const header = document.getElementById("header"),
  hero = document.getElementById("hero"),
  headerContainer = document.getElementById("headerContainer"),
  logo = document.getElementById("logo");

document.addEventListener("scroll", animateNavbarOnScroll);
// For Some reasons it was not working, Now it's working;

function animateNavbarOnScroll() {
  let totalHeight = header.clientHeight + hero.clientHeight;
  if (window.scrollY >= totalHeight) {
    header.classList.add("sticky");
    header.classList.add("top-0");
    headerContainer.classList.remove("py-8");
    headerContainer.classList.add("py-3");
    header.classList.add("shadow-md");
    logo.classList.remove("w-14");
    logo.classList.remove("h-14");
    logo.classList.add("w-12");
    logo.classList.add("h-12");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("top-0");
    headerContainer.classList.remove("py-3");
    header.classList.remove("shadow-md");
    headerContainer.classList.add("py-8");
    logo.classList.remove("w-12");
    logo.classList.remove("h-12");
    logo.classList.add("w-14");
    logo.classList.add("h-14");
  }
}

// Logic
/*
    We need to make the navbar stick when we cross the hero section, So Let's Do it :)
    first, we need to take both header and hero's height
    Let's Make it more small
    Let's add shadow
*/
