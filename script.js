let option = document.getElementById("Convert_Options");
let tempInput = document.getElementById("tempInput");
let result = document.getElementById("result");

function CelToFer(Temp) {
  return (Temp * 9) / 5 + 32;
}
function FerToCel(Temp) {
  return ((Temp - 32) * 5) / 9;
}
function TempValidator(Temp) {
  if (Temp.toString() == "NaN") {
    result.textContent = "Not a number!";
    return false;
  } else {
    return true;
  }
}

tempInput.addEventListener("input", () => {
  let Temp = Number(tempInput.value);
  if (TempValidator(Temp)) {
    if (option.value == "CelToFer") {
      result.textContent = CelToFer(Temp).toPrecision(3)+"°F";
    } else if (option.value == "FerToCel") {
      result.textContent = FerToCel(Temp).toPrecision(3)+"°C";
    } else {
      console.log("Enter Value");
    }
  }
});
option.addEventListener("input", () => {
  let Temp = Number(tempInput.value);
  if (TempValidator(Temp)) {
    if (option.value == "CelToFer") {
      result.textContent = CelToFer(Temp).toPrecision(3)+"°F";
    } else if (option.value == "FerToCel") {
        result.textContent = FerToCel(Temp).toPrecision(3) + "°C";
    } else {
      console.log("Enter Value");
    }
  }
});
