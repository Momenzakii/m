let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mouvil = document.querySelector(".mouvil");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3.2 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  mouvil.style.fontSize = value + "px";
  if (scrollY >= 67) {
    mouvil.style.fontSize = 67 + "px";
    mouvil.style.position = "fixed";
    if (scrollY >= 468) {
      mouvil.style.display = "none";
    } else {
      mouvil.style.display = "block";
    }
    if (scrollY >= 180) {
      document.querySelector(".main").style.background =
        "linear-gradient(#1b8e9b, #b6a818)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};
