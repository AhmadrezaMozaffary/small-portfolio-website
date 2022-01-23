"use strict";

// Selecting Elements from DOM
const root = document.querySelector(":root");
const submitInputBtn = document.querySelector('input[type="submit"]');
const personName = document.querySelector(".client-name");
const personEmail = document.querySelector(".client-email");
const personMsg = document.querySelector(".client-msg");
const arrowUpBtn = document.querySelector(".arrow-up");
const modeTogglerBtn = document.querySelector(".mode-toggler");

// Response to contact form with alertifyJS library
submitInputBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    // Simple validation ( We can use "RegEx" for validations but I prefer to keep it simple )
    personName.value.length > 3 &&
    personEmail.value.length > 3 &&
    personEmail.value.includes("@") &&
    personMsg.value.length > 3
  ) {
    alertify.success(
      `Thanks ${personName.value.split(" ")[0]} your Message Sent !`
    );
  } else if (!personEmail.value.includes("@")) {
    alertify.error("Entered E-mail is not valid");
  } else {
    alertify.error("Please fill out the form ⛔️");
  }
});

// Scrolling to top of the page
arrowUpBtn.addEventListener("click", () => {
  // Move all the way up
  window.scrollTo(0, 0);
});

// Dark/Light mode
let isDarkActve = true;
modeTogglerBtn.addEventListener("click", () => {
  if (isDarkActve) {
    document.documentElement.style.setProperty("--primary-color", "white");
    document.documentElement.style.setProperty("--text-color", "#000");
    document.documentElement.style.setProperty("--html-bg", "#fff");
    alertify.success("'Lightmode' activated");
  } else {
    document.documentElement.style.setProperty(
      "--primary-color",
      "rgb(84, 58, 179)"
    );
    document.documentElement.style.setProperty("--text-color", "#fff");
    document.documentElement.style.setProperty(
      "--text-color",
      "rgb(179, 178, 178)"
    );
    document.documentElement.style.setProperty(
      "--html-bg",
      "rgb(179, 178, 178)"
    );
    alertify.success("'Darkmode' activated");
  }
  isDarkActve = !isDarkActve;
});
