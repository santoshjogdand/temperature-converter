let option = document.getElementById("Convert_Options");
let tempInput = document.getElementById("tempInput");
let result = document.getElementById("result");

function CelToFer(Temp) {
  return (Temp * 9) / 5 + 32;
}
function FerToCel(Temp) {
  return ((Temp - 32) * 5) / 9;
}
function CelToKel(Temp) {
  return Temp + 273.15;
}
function KelToCel(Temp) {
  return Temp - 273.15;
}
function FerToKel(Temp) {
  return FerToCel(Temp) + 273.15;
}
function KelToFer(Temp) {
  return CelToFer(KelToCel(Temp));
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
      result.textContent = CelToFer(Temp).toPrecision(5)+"°F";
    } else if (option.value == "FerToCel") {
      result.textContent = FerToCel(Temp).toPrecision(5)+"°C";
    }else if(option.value == "CelToKel"){
      result.textContent = CelToKel(Temp).toPrecision(5)+"K";
    }else if(option.value == "KelToCel"){
      result.textContent = KelToCel(Temp).toPrecision(5)+"°C";
    }else if(option.value == "FerToKel"){
      result.textContent = FerToKel(Temp).toPrecision(5)+"K";
    }else if(option.value == "KelToFer"){
      result.textContent = KelToFer(Temp).toPrecision(5)+"°F";
    }
     else {
      console.log("Enter Value");
    }
  }
});
option.addEventListener("input", () => {
  let Temp = Number(tempInput.value);
  if (TempValidator(Temp)) {
    if (option.value == "CelToFer") {
      result.textContent = CelToFer(Temp).toPrecision(5)+"°F";
    } else if (option.value == "FerToCel") {
      result.textContent = FerToCel(Temp).toPrecision(5)+"°C";
    }else if(option.value == "CelToKel"){
      result.textContent = CelToKel(Temp).toPrecision(5)+"K";
    }else if(option.value == "KelToCel"){
      result.textContent = KelToCel(Temp).toPrecision(5)+"°C";
    }else if(option.value == "FerToKel"){
      result.textContent = FerToKel(Temp).toPrecision(5)+"K";
    }else if(option.value == "KelToFer"){
      result.textContent = KelToFer(Temp).toPrecision(5)+"°F";
    }
     else {
      console.log("Enter Value");
    }
  }
});
