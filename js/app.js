"use strict";

const mode_switch = document.getElementById("switch");
const root = document.documentElement;

let is_light_mode = true;
mode_switch.addEventListener("click", () => {
  if (is_light_mode) {
    root.style.setProperty('--main-color', '#181818');
    root.style.setProperty('--text', '#ffffff');
    root.style.setProperty('--text-alt', '#0b0b0b');
    root.style.setProperty('--switch', '#ffffff');
    mode_switch.textContent = "Svetlý";
  }
  else {
    root.style.setProperty('--main-color', '#ebebeb');
    root.style.setProperty('--text', '#0b0b0b');
    root.style.setProperty('--text-alt', '#ffffff');
    root.style.setProperty('--switch', '#0b0b0b');
    mode_switch.textContent = "Tmavý";
  }
  is_light_mode = !is_light_mode;
});

const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("show");
})