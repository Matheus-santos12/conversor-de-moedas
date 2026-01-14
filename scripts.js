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
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input para receber somente valor numérico.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit(enviar) do formulário.
form.onsubmit = (event) => {
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
      convertCurrency(amount.value, PEN, "S");
      break;
    case "KWD":
      convertCurrency(amount.value, KWD, "KWD");
      break;
  }
};

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda  selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o total.
    let total = amount * price;

    // Verifica se o resultado não é um número.
    if (isNaN(total)) {
      return alert("Por favor, verifique o valor digitado e corrija-o!");
    }
    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total.
    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result");

    console.log(error);
    alert(
      "Não foi possível realizar a conversão. Por favor, tente mais tarde."
    );
  }
}

function formatCurrencyBRL(value) {
  // Converte para número para utilizar o toLocasString para formatar o padrão BRL.
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
