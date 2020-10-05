// function letter() {
//   var x = document.getElementById("inp").value;
//   document.getElementById("number").innerHTML = x;
// }

let inp = document.getElementById("inp");
let number = document.getElementById("number");

inp.addEventListener("input", function () {
  const count = inp.value.length;
  number.textContent = count;
});

function Reset() {
  location.reload();
}
