'use strict';

// Navbar menu
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
});

// SLIDER Animation
// document.getElementById("restart").setAttribute("disabled", "");

// Code from index goes here

// let myInterval = setInterval(startAni, 10000);

// function startAni() {
//   document.getElementById("restart").setAttribute("disabled", "");
//   document.getElementById("stop").removeAttribute("disabled");
//   document.getElementById("next").click();
// }

// function stopAni() {
//   document.getElementById("stop").setAttribute("disabled", "");
//   document.getElementById("restart").removeAttribute("disabled");
//   clearInterval(myInterval);
// }

// function reStartAni() {
//   location.reload();
// }

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// console.log(currentYear);
