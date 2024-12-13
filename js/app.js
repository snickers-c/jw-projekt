"use strict";

const mode_switch = document.getElementById("switch");
const root = document.documentElement;

let is_light_mode;
if (localStorage.getItem("is_light_mode") === null) {
  localStorage.setItem("is_light_mode", true);
  is_light_mode = true;
} else {
  is_light_mode = JSON.parse(localStorage.getItem("is_light_mode"));
  if (!is_light_mode) {
    // dark mode
    root.style.setProperty('--main-color', '#181818');
    root.style.setProperty('--text', '#ffffff');
    root.style.setProperty('--text-alt', '#0b0b0b');
    root.style.setProperty('--switch', '#ffffff');
    root.style.setProperty('--nav-footer-color', '#2f2f2f');
    root.style.setProperty('--card-color', '#000000');
    root.style.setProperty('--card-border', '#777777');
    root.style.setProperty('--text2', '#bbbbbb');
    mode_switch.textContent = "Svetlý";
  } else {
    // light mode
    root.style.setProperty('--main-color', '#ebebeb');
    root.style.setProperty('--text', '#0b0b0b');
    root.style.setProperty('--text-alt', '#ffffff');
    root.style.setProperty('--switch', '#0b0b0b');
    root.style.setProperty('--nav-footer-color', '#e0e0e0');
    root.style.setProperty('--card-color', '#ffffff');
    root.style.setProperty('--card-border', '#cccccc');
    root.style.setProperty('--text2', '#555555');
    mode_switch.textContent = "Tmavý";
  }
}

mode_switch.addEventListener("click", () => {
  if (is_light_mode) { // dark mode
    root.style.setProperty('--main-color', '#181818');
    root.style.setProperty('--text', '#ffffff');
    root.style.setProperty('--text-alt', '#0b0b0b');
    root.style.setProperty('--switch', '#ffffff');
    root.style.setProperty('--nav-footer-color', '#2f2f2f');
    root.style.setProperty('--card-color', '#000000');
    root.style.setProperty('--card-border', '#777777');
    root.style.setProperty('--text2', '#bbbbbb');
    mode_switch.textContent = "Svetlý";
    is_light_mode = false;
    localStorage.setItem("is_light_mode", false);
  } else { // light mode
    root.style.setProperty('--main-color', '#ebebeb');
    root.style.setProperty('--text', '#0b0b0b');
    root.style.setProperty('--text-alt', '#ffffff');
    root.style.setProperty('--switch', '#0b0b0b');
    root.style.setProperty('--nav-footer-color', '#e0e0e0');
    root.style.setProperty('--card-color', '#ffffff');
    root.style.setProperty('--card-border', '#cccccc');
    root.style.setProperty('--text2', '#555555');
    mode_switch.textContent = "Tmavý";
    is_light_mode = true;
    localStorage.setItem("is_light_mode", true);
  }
});

const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");

hamburger.addEventListener('click', () => {
  nav_links.classList.toggle('active');
});

document.querySelectorAll('.course-card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;

    card.classList.toggle('active');
  });
});
