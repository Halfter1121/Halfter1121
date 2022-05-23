const video = document.querySelector(".video-block__content");
const videoBlock = document.querySelector(".video-block");
const relay = document.querySelector(".video-block__play");
const navItems = document.querySelectorAll(".nav_section");
const nav = document.querySelector(".nav");
const tab = document.querySelectorAll(".tab-pane");
const message = document.querySelector(".video-block__muted");






//   Video   //
function play() {
  video.play();
  relay.style.display = "none";
}

function pause() {
  video.pause();
  relay.style.display = "";
}

videoBlock.addEventListener("click", (event) => {
  if (event.target == videoBlock) {
    pause();
  }
});

function clearActive(items) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

function addActive(items) {
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      clearActive(navItems);
      clearActive(tab);
      tab[event.target.id - 1].classList.add("active");
      event.target.classList.add("active");
      console.log(event.target);
    });
  });
}

addActive(navItems);
relay.addEventListener("click", play);


let count = 0;

message.onclick = function () {
  ++count;
  Check();
  console.log(count);

};
function Check() {
  switch (count) {
    case 1: video.muted = false;
      break;
    case 2: video.muted = true;
      count = 0;
      break;

  }
}



//   Tab   //

function changeTab() { }




