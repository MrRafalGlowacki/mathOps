const firstNumber = document.querySelector(".firs-nmb");
const secondNumber = document.querySelector(".second-nmb");
const sign = document.querySelector(".sign");
const form = document.querySelector(".form");
const resultForm = document.querySelector('[name="result"]');
const changeBtn = document.querySelector(".change-btn");
const type = document.querySelector(".type");
let wynik = [];
let goodResult;

const reloadHandlePlus = () => {
  firstNumber.textContent = Math.round(Math.random() * 100);
  secondNumber.textContent = Math.round(Math.random() * 100);
  const FN = Number(firstNumber.textContent);
  const SN = Number(secondNumber.textContent);
  goodResult = FN + SN;
  wynik.push(goodResult);
  console.log(wynik);
};
const reloadHandleMinus = () => {
  firstNumber.textContent = Math.round(Math.random() * 100);
  secondNumber.textContent = Math.round(Math.random() * 100);
  const FN = Number(firstNumber.textContent);
  const SN = Number(secondNumber.textContent);
  goodResult = FN - SN;
  wynik.push(goodResult);
  console.log(wynik);
};

const typeHandler = () => {
  if (changeBtn.textContent === "zmień na odejmowanie") {
    changeBtn.textContent = "zmień na dodawanie";
    type.textContent = "-";
    reloadHandleMinus();
    // console.log(wynik);
  } else if (changeBtn.textContent === "zmień na dodawanie") {
    changeBtn.textContent = "zmień na odejmowanie";
    type.textContent = "+";
    reloadHandlePlus();
    // console.log(wynik);
  } else return;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = Number(resultForm.value);
  if (result === goodResult) {
    alert("Dobrze!");
    if (type.textContent === "+") reloadHandlePlus();
    else if (type.textContent === "-") reloadHandleMinus();
  } else {
    alert("Źle, spróbuj jeszcze raz");
    form.reset();
    return;
  }
  form.reset();
});

changeBtn.addEventListener("click", typeHandler);
onload = () => {
  reloadHandlePlus();
};
