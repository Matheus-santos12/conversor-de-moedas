// cotação de moedas.
const USD = 5.37;
const EUR = 6.26;
const GBP = 7.22;
const PEN = 1.6;
const KWD = 17.45;

// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input para receber somente valor numérico.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit(enviar) do formulário.
form.onsubmit = () => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    case "PEN":
      convertCurrency(amount.value, PEN, "S/");
      break;
    case "KWD":
      convertCurrency(amount.value, KWD, "KD");
      break;
  }
};

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol);
}
