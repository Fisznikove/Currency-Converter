let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let primaryElement = document.querySelector(".js-label");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`;
    let rate;


    switch (currencyPair) {
        case "EUR/USA":
            rate = 1.04;
            break;
        case "EUR/CHF":
            rate = 0.99;
            break;
        case "EUR/GBP":
            rate = 0.86;
            break;
        case "EUR/PLN":
            rate = 4.70;
            break;
        case "USD/EUR":
            rate = 0.96;
            break;
        case "USD/CHF":
            rate = 0.95;
            break;
        case "USD/GBP":
            rate = 0.83;
            break;
        case "USD/PLN":
            rate = 4.51;
            break;
        case "CHF/EUR":
            rate = 1.02;
            break;
        case "CHF/USD":
            rate = 1.06;
            break;
        case "CHF/GBP":
            rate = 0.87;
            break;
        case "CHF/PLN":
            rate = 4.77;
            break;
        case "GBP/EUR":
            rate = 1.16;
            break;
        case "GBP/USD":
            rate = 1.21;
            break;
        case "GBP/CHF":
            rate = 1.14;
            break;
        case "GBP/PLN":
            rate = 5.45;
            break;
        case "PLN/EUR":
            rate = 0.21;
            break;
        case "PLN/USD":
            rate = 0.22;
            break;
        case "PLN/CHF":
            rate = 0.21;
            break;
        case "PLN/GBP":
            rate = 0.18;
            break;
        default:
            rate = 1;
    }
    let money = primaryElement.value;
    let result = money * rate;
    resultElement.innerText = `${result.toFixed(2)} ${outputCurrencyElement.value}`;

});
