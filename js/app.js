"use strict";

const light_mode = document.getElementById("light-mode");
const dark_mode = document.getElementById("dark-mode");

light_mode.addEventListener("click", () => {
  // console.log("aha");
  document.body.style = "background: linear-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(232, 232, 232, 1) 50%, rgba(255, 255, 255, 1) 100%);"
});

dark_mode.addEventListener("click", () => {
  document.body.style = "background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 50%, rgba(0,0,0,1) 100%) fixed;"
});
