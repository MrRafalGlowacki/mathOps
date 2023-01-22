const firstNumber = document.querySelector(".firs-nmb");
const secondNumber = document.querySelector(".second-nmb");
const sign = document.querySelector(".type");
const form = document.querySelector(".form");
const resultForm = document.querySelector('[name="result"]');
// let generator = Math.round(Math.random() * 100);
let wynik = [];
let goodResult;
const reloadHandle = () => {
  firstNumber.textContent = Math.round(Math.random() * 100);
  secondNumber.textContent = Math.round(Math.random() * 100);
  const FN = Number(firstNumber.textContent);
  const SN = Number(secondNumber.textContent);

  goodResult = FN + SN;
  wynik.push(goodResult);
  console.log(wynik);
};
onload = () => {
  reloadHandle();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = Number(resultForm.value);
  if (result === goodResult) {
    alert("good");
  } else {
    alert("bad");
  }
  console.log(result);
  reloadHandle();
  form.reset();
});
