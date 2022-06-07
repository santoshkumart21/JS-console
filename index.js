const para = document.createElement("p");
const symbol = document.createElement("text");
const inputs = document.createElement("input");
inputs.id = "console-input";
symbol.textContent = ">";
document.body.appendChild(symbol);
document.body.appendChild(inputs);

var input = document.getElementById("console-input");
var result;
const inputValues = (e) => {
  result = e.target.value;
};
input.addEventListener("input", inputValues);
var val = 0;
var inputEle;
var prevInp = "console-input";

const newInp = (callback) => {
  callback.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById(prevInp).disabled = true;
      val = val + 1;
      inputEle = document.createElement("input");

      try {
        para.innerText = "< " + eval(result);
        para.style.color = "blue";
      } catch (error) {
        para.innerText = "< " + error;
        para.style.color = "red";
      }
      document.body.appendChild(symbol);
      document.body.appendChild(para);
      symbol.innerText = "> ";
      document.body.appendChild(symbol);
      inputEle.id = "console-input" + val;
      document.body.appendChild(inputEle);
      var inputId = document.getElementById("console-input" + val);
      inputId.addEventListener("input", inputValues);
      inputId.focus();
      inputId.select();
      newInp(inputId);
      prevInp = "console-input" + val;
    }
  });
};

newInp(input);
