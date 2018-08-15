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
//  showContent(job);
}

function animate(job) {
  var logo = document.getElementById(job);
  var x = 0; var y = 0;
  var id = setInterval(animation, 5);
  function animation() {
    if (x == 750 && y == 0) {
      clearInterval(id);
    }
    else {
      if (x < 750) {
        x++;
        logo.style.left = x + 'px';
      }
      if (y < 0) {
        y++;
        logo.style.top = y + 'px';
      }
    }
  }
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
