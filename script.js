const listButtons = document.querySelectorAll(".button");
const screenTarget = document.getElementById("screenTarget");
var calcul = "";
var symboles = ["+", "-", "/", "%", "x"];
listButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const text = button.childNodes[0].textContent;
    if (text === "=") {
      calcule(calcul);
      return;
    } else if (text === "C") {
      calcul = "";
      screenTarget.textContent = "";
    }else{
        if (symboles.includes(text)) {
            calcul += " " + text + " ";
            screenTarget.textContent += " " + text + " ";
        } else {
            calcul += text;
            screenTarget.textContent += text;
        }
    }
  });
});

const calcule = (values) => {
  values = values.split(" ");
  let result = 0;
  values.forEach((value, index) => {
    if (index === 0) {
      result += parseFloat(values[index]);
    } else {
      switch (value) {
        case "+":
          result += parseFloat(values[index + 1]);
          break;
        case "-":
          result -= parseFloat(values[index + 1]);
          break;
        case "/":
          result /= parseFloat(values[index + 1]);
          break;
        case "%":
          result *= (parseFloat(values[index + 1])/100);
          break;
        case "x":
          result *= parseFloat(values[index + 1]);
          break;
        default:
      }
    }
  });
  result.toString().includes(".") ? screenTarget.textContent = result.toFixed(3): screenTarget.textContent = result;
};
