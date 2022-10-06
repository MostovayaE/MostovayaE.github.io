function onClick() {
  alert("click");
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button1");
  b.addEventListener("click", onClick);
});

function click1() {

  let f1 = document.getElementsByName("field1");
  let f2 = document.getElementsByName("field2");
  let r = document.getElementById("result");
  r.innerHTML = parseInt(f1[0].value) * parseInt(f2[0].value);
  return false;
  }