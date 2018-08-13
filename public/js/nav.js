"use strict"

function startSite() {
  var hash = window.location.hash;
  var home = "about";
  if (hash) {
    home = hash.replace("#", "");
  }
  enableMenu();
  loadPage(home);
  }

function enableMenu() {
  enableBtn("about-nav");
  enableBtn("projects-nav");
  enableBtn("work-nav");
  enableBtn("contact-nav");
}

function enableBtn(btnId) {
  var id = document.getElementById(btnId);
  if (id) {
    id.addEventListener("click", loadPage, false);
    id.param = findTargetPage(btnId);
  }
  else {
    console.log(id = "= id = null");
  }
}

function findTargetPage(btnId) {
  var targetPage = btnId;
  if (btnId.includes("-")) {
    targetPage = btnId.slice(0, btnId.indexOf("-"));
  }
  return targetPage;
}

function loadPage(page) {
  if (typeof page !== 'string') {
    var page = page.target.param;
  }
  $("#show-content").load("../html/" + page + ".html", function detect() {
    detectBtns(page);
  });
}

function detectBtns(page) {
  switch (page) {
    case "about":
      enableBtn("projects-btn");
      window.location.hash = "#about";
      return;
    case "projects":
      window.location.hash = "#projects";
      return;
    case "work":
      window.location.hash = "#work";
      return;
    case "contact":
      window.location.hash = "#contact";
      return;
  }
}

startSite();
