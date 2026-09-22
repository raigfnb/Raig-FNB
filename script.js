// RAIG — shared behaviour: mobile nav toggle + expandable submenus on touch

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      var open = nav.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });
  }

  // On small screens, tapping a parent nav item with children expands
  // its submenu instead of navigating away.
  document.querySelectorAll("nav.primary-nav li.has-children > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 720) {
        e.preventDefault();
        link.parentElement.classList.toggle("is-expanded");
      }
    });
  });
});
