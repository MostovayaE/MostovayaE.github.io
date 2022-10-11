window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  function onClick() {
    let f1 = document.getElementById("field1").value;
    let f2 = document.getElementById("field2").value;
    let r = document.getElementById("result");
    let onlydigitnotzero = /^(?!(0))\d+$/;
    if (f1.match(onlydigitnotzero) === null || f2.match(onlydigitnotzero) === null) {
      alert("Введено не число или начинается с нуля");
      r.innerHTML = "Ошибка";
    }
    else {
      r.innerHTML = parseInt(f1) * parseInt(f2);
    }
  }
  let b = document.getElementById("button1");
  b.addEventListener("click", onClick);
});
