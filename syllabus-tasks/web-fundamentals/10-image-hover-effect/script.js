function changePosition() {
  document.getElementById("main").style.height = "90vh";
  document.getElementById("main").style.alignItems = "center";
  document.getElementById("img").style.transition = ".3s ease";
}

function samePosition() {
    document.getElementById("main").style.height = "";
    document.getElementById("main").style.alignItems = "";
    document.getElementById("img").style.transition = ".5s ease-in-out";    
}