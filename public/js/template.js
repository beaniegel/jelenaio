"use strict"

document.getElementById("about").addEventListener("click", load_about);
document.getElementById("contact").addEventListener("click", load_contact);

function load_about() {
  $(function() {
    $("#show-content").load("../html/about.html");
  });
  content = "about"
}

function load_contact() {
  console.log("contact");
  $(function() {
    $("#show-content").load("../html/contact.html");
  });
  content = "contact"
}

load_about();
