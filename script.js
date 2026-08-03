import AOS from "aos";
import "aos/dist/aos.css";

// Initialize scroll animations
AOS.init({
  duration: 1000,
  offset: 100,
});

// Mobile nav menu toggle (hamburger icon opens/closes the nav links)
const menuToggle = document.querySelector(".header__menu-mobile");
const headerMenu = document.querySelector(".header__menu");

if (menuToggle && headerMenu) {
  menuToggle.addEventListener("click", () => {
    headerMenu.classList.toggle("header__menu--open");
  });

  // Close the menu automatically once a link is tapped
  headerMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      headerMenu.classList.remove("header__menu--open");
    });
  });
}

// Register a service worker so the site can install as a mobile web app
// and keep working on a flaky connection.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Offline support is a nice-to-have — fail silently if it can't register.
    });
  });
}
