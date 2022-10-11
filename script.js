var blue = document.getElementById("#blur");

window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    var elementy = document.getElementById("blur");
    elementy.classList.add("blurry");
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup").style.gap = "15px";
    document.querySelector(".popup").style.flexDirection = "column";
    document.querySelector(".popup").style.justifyContent = "center";
    document.querySelector(".popup").style.alignItems = "center";
    document.querySelector(".popup").style.textAlign = "center";
    document.querySelector(".popup").style.position = "fixed";
    document.querySelector(".popup").style.visibility = "visible";
    document.querySelector(".popup").style.opacity = "1";
  }, 3000);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  var element = document.getElementById("blur");
  element.classList.remove("blurry");
});
