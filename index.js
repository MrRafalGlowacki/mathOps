const firstNumber = document.querySelector(".firs-nmb");
const secondNumber = document.querySelector(".second-nmb");
const sign = document.querySelector(".sign");
const form = document.querySelector(".form");
const resultForm = document.querySelector('[name="result"]');
const changeBtn = document.querySelector(".change-btn");
const subtrChangeBtn = document.querySelector(".change-btn-subtraction");
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
// liczby naturalne
const reloadHandleMinusNatur = () => {
  firstNumber.textContent = Math.round(Math.random() * 100);
  const FN = Number(firstNumber.textContent);
  secondNumber.textContent = Math.floor(Math.random() * (FN + 1));
  const SN = Number(secondNumber.textContent);
  goodResult = FN - SN;
  wynik.push(goodResult);
  console.log(wynik);
};
// Liczby całkowite
const reloadHandleMinusIntegers = () => {
  firstNumber.textContent = Math.round(Math.random() * 100);
  secondNumber.textContent = Math.round(Math.random() * 100);
  const FN = Number(firstNumber.textContent);
  const SN = Number(secondNumber.textContent);
  goodResult = FN - SN;
  wynik.push(goodResult);
  console.log(wynik);
};

const minusTypeHandler = () => {
  if (subtrChangeBtn.textContent === "zmień na liczby całkowite") {
    subtrChangeBtn.textContent = "zmień na liczby naturalne";
    subtractionNaturOrIntegers();
  } else if (subtrChangeBtn.textContent === "zmień na liczby naturalne") {
    subtrChangeBtn.textContent = "zmień na liczby całkowite";
    subtractionNaturOrIntegers();
  } else return;
};
const subtractionNaturOrIntegers = () => {
  if (subtrChangeBtn.textContent === "zmień na liczby całkowite") {
    reloadHandleMinusNatur();
  } else {
    reloadHandleMinusIntegers();
  }
};
//minus button first text content
const minusButtonAddFirstTextContent = () => {
  if (subtrChangeBtn.textContent === "")
    subtrChangeBtn.textContent = "zmień na liczby całkowite";
  else return;
};

const typeHandler = () => {
  if (changeBtn.textContent === "zmień na odejmowanie") {
    changeBtn.textContent = "zmień na dodawanie";
    type.textContent = "-";
    type.classList.add("minus-padding-bottom");
    minusButtonAddFirstTextContent();
    subtrChangeBtn.removeAttribute("hidden");
    subtrChangeBtn.addEventListener("click", minusTypeHandler);
    subtractionNaturOrIntegers();
    // console.log(wynik);
  } else if (changeBtn.textContent === "zmień na dodawanie") {
    changeBtn.textContent = "zmień na odejmowanie";
    type.textContent = "+";
    type.classList.remove("minus-padding-bottom");
    subtrChangeBtn.setAttribute("hidden", "");
    subtrChangeBtn.removeEventListener("click", minusTypeHandler);
    reloadHandlePlus();
    // console.log(wynik);
  } else return;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = Number(resultForm.value);
  if (result === goodResult) {
    Notiflix.Notify.success(`Dobrze! To było ${result}`, {
      position: "center-top",
      cssAnimationStyle: "from-right",
      clickToClose: true,
      distance: "60px",
      showOnlyTheLastOne: true,
    });
    if (type.textContent === "+") reloadHandlePlus();
    else if (type.textContent === "-") subtractionNaturOrIntegers();
  } else {
    Notiflix.Notify.failure(`Źle, to nie jest ${result}, spróbuj jeszcze raz`, {
      position: "center-top",
      cssAnimationStyle: "from-left",
      clickToClose: true,
      distance: "60px",
      showOnlyTheLastOne: true,
    });
    form.reset();
    return;
  }
  form.reset();
});
changeBtn.addEventListener("click", typeHandler);
onload = () => {
  reloadHandlePlus();
};
