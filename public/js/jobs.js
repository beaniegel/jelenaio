"use strict"

function enableJobs() {
  var jobs = ["transip", "lek", "bain", "iff", "camfm", "cedar", "gj"];
  for (var i = 0; i < jobs.length; i++) {
    onClick(jobs[i]);
  }
}

function onClick(btnId) {
  var id = document.getElementById(btnId);
  id.addEventListener("click", openJob);
}

function openJob(){
  var job = this.id;
  animate(job);
}

function findLocation(elem) {
  var id = document.getElementById(elem);
  var goal = id.getBoundingClientRect();
  return goal;
}

function setTarget(job) {
  var target = findLocation("job-temp");
  var curr = findLocation(job);
  var tX = target.x - curr.x;
  var tY = target.y - curr.y;
  return { x: tX, y: tY };
}

function animate(job) {
  var logo = document.getElementById(job);
  var t = setTarget(job);
  var x = 0 ; var y = 0;
  var id = setInterval(animation, 4);
  console.log("target: x = ", t.x," y = ", t.y);
  function animation() {
    if (x == t.x && y == t.y) {
      console.log("THE END");
      clearInterval(id);
      showContent();
    }
    else {
      if (x < t.x) {
        x++;
        logo.style.left = x + 'px';
        console.log("x move: x = ", x, " y = ", y);
      }
      if (y > t.y) {
        y--;
        logo.style.top = y + 'px';
        console.log("y move: x = ", x, " y = ", y);
      }
    }
  }
}

function showContent() {
  var id = document.getElementById("job-descr");
  id.classList.remove("hide");
}

/* function showContent(job) {
  $("#show-content").load("../html/" + job + ".html", function detect() {
}


@keyframes move {
  0% { left: 0px; top:0px}
  25% {left: 0px; top: -220px}
  100% {left: 950px; top: -220px}
}

.move {
  animation-name: move;
  animation-duration: 5s;
  animation-fill-mode:forwards;
}
*/
