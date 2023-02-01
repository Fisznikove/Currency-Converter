{
    const calculateResult = (currencyPair, money) => {
        switch (currencyPair) {
            case "EUR/USA":
                return 1.04 * money;

            case "EUR/CHF":
                return 0.99 * money;

            case "EUR/GBP":
                return 0.86 * money;

            case "EUR/PLN":
                return 4.70 * money;

            case "USD/EUR":
                return 0.96 * money;

            case "USD/CHF":
                return 0.95 * money;

            case "USD/GBP":
                return 0.83 * money;

            case "USD/PLN":
                return 4.51 * money;

            case "CHF/EUR":
                return 1.02 * money;

            case "CHF/USD":
                return 1.06 * money;

            case "CHF/GBP":
                return 0.87 * money;

            case "CHF/PLN":
                return 4.77 * money;

            case "GBP/EUR":
                return 1.16 * money;

            case "GBP/USD":
                return 1.21 * money;

            case "GBP/CHF":
                return 1.14 * money;

            case "GBP/PLN":
                return 5.45 * money;

            case "PLN/EUR":
                return 0.21 * money;

            case "PLN/USD":
                return 0.22 * money;

            case "PLN/CHF":
                return 0.21 * money;

            case "PLN/GBP":
                return 0.18 * money;

            default:
                return 1 * money;
        }

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputCurrencyElement = document.querySelector(".js-inputCurrency");
            const outputCurrencyElement = document.querySelector(".js-outputCurrency");
            const primaryElement = document.querySelector(".js-label");
            const resultElement = document.querySelector(".js-result");
            const currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`;
            const money = +primaryElement.value
            const result = calculateResult(currencyPair, money);
            resultElement.innerText = `${result.toFixed(2)} ${outputCurrencyElement.value}`;

        });
    }

    init();

}