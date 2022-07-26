// HTML 代码为
// <input type="text" id="my-input" />
var input = document.getElementById("my-input");
input.addEventListener("keypress", checkName, false);

function checkName(e) {
  if (e.charCode < 97 || e.charCode > 122) {
    e.preventDefault();
  }
}
