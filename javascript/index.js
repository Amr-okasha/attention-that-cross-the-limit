let textArea = document.getElementById("textarea");
let result = document.getElementById("span");

textArea.oninput = function () {
  result.textContent = 50 - this.value.length;
  if (this.value.length < 51) {
    result.style.border = "2px solid black";
    result.style.color = "black";
  } else {
    result.style.color = "red";
    result.style.border = "2px solid red";
  }
};
