"use strict"

function enableJobs() {
  var logo = ["lek", "bain", "iff", "camfm", "gj", "cedar", "transip"];
  for (var i = 0; i < logo.length; i++) {
    var btn = "btn" + (i+1);
    onClick(btn, logo[i]);
  }
  showContent("transip");
}

function onClick(btnId, logo) {
  var id = document.getElementById(btnId);
  if (id) {
    id.logo = logo;
    if (btnId != "btn7") {
      id.addEventListener("click", openJob);
    }
  }
}

function openJob() {
  disableClick(true);
  var e = { middle: document.getElementById("main"),
            current: document.getElementById(this.id),
            target: document.getElementById("btn7")};
  var t = setTarget(e.current, e.target);
  prepareLogos(e.current, e.target);
  removeDeprContent();
  startAnimation(e, t);
}

function removeDeprContent() {
  var div = document.getElementById("job-descr");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function setTarget(currId, targetId) {
  var target = targetId.getBoundingClientRect();
  var curr = currId.getBoundingClientRect();
  var tX = target.left - curr.left;
  var tY = target.top - curr.top;
  return { x: tX, y: tY };
}

function prepareLogos(curr, target) {
  var depr = target.logo;
  target.logo = curr.logo;
  curr.logo = depr;
  target.classList.remove(depr);
  return true;
}

function disableClick(bool) {
  var id = document.getElementById("jobwheel");
  if (bool) {
    id.classList.add("noClick");
    return;
  }
  id.classList.remove("noClick");
}

function startAnimation(elem, target) {
  var x = 0; var y = 0;
  var tx = target.x; var ty = target.y
  var ani = setInterval(animate, 25);
  function animate() {
    for (var i = 0; i < 20; i++) {
      if (x >= tx && y <= ty) {
        finaliseLogos(elem);
        console.log("curr elem: ", elem.current);
        showContent(elem.target.logo);
        disableClick(false);
        clearInterval(ani);
      }
      else {
        if (x < tx) {
          x++;
          elem.current.style.left = x + 'px';
        }
        if (y > ty) {
          y--;
          elem.current.style.top = y + 'px';
        }
      }
    }
  }
}

function finaliseLogos(elem) {
  elem.target.classList.add(elem.target.logo);
  elem.middle.classList.add(elem.target.logo);
  elem.middle.classList.remove(elem.current.logo);
  elem.current.classList.add(elem.current.logo);
  elem.current.classList.remove(elem.target.logo);
  elem.current.style.left = 0 + 'px';
  elem.current.style.top = 0 +'px';
}

function showContent(job) {
  console.log("current content = ", job);
  $("#job-descr").load("../html/jobs/" + job + ".html");
}
