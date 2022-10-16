function updatePrice(v) {

  let s = document.getElementsByName("myselect");
  let select = s[0];
 
  
  
  let radioDiv = document.getElementById("myradios");
  radioDiv.style.display = ((select.value === "1" || select.value === "3") ? "none" : "block");

  let checkDiv = document.getElementById("check");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");

  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;

  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }


  if (select.value === "2") {
    let radios = document.getElementsByName("myradio");
    radios.forEach(function (radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  }

  if (select.value === "3") {
    let checkboxes = document.getElementsByName("check");
    checkboxes.forEach(function (checkboxes) {
      if (checkboxes.checked) {
        let checkboxPrice = prices.prodProperties[checkboxes.value];
        if (checkboxPrice !== undefined) {
          price += checkboxPrice;
        }
      }
    });
  }

  let onlydigitnotzero = /^(?!(0))\d+$/;
  let prodPrice = document.getElementById("result");
  if (v.match(onlydigitnotzero) === null) {
    prodPrice.innerHTML = "Количество не введено или начинается с нуля";
  }
  else {

    prodPrice.innerHTML = v * price + " рублей";
  }




}






function getPrices() {
  return {
    prodTypes: [100, 200, 300],
    prodOptions: {
      r1: 10,
      r2: 5,
      r3: 15,
    },
    prodProperties: {
      check1: 100,

    }

  };
}



window.addEventListener('DOMContentLoaded', function (event) {
  let radioDiv = document.getElementById("myradios");
  radioDiv.style.display = "none";

  let checkboxDiv = document.getElementById("check");
  checkboxDiv.style.display = "none";

  let v = document.getElementById("field1");
  v.addEventListener("input", function (event) {
    updatePrice(v.value);
  });

  let s = document.getElementsByName("myselect");
  let select = s[0];


  select.addEventListener("change", function (event) {
    let target = event.target;
    updatePrice(v.value);
  });
  let radios = document.getElementsByName("myradio");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      updatePrice(v.value);
    });
  });
  let checkboxes = document.getElementsByName("check");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      updatePrice(v.value);
    });
  });

});