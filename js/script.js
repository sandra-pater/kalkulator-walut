{
    const calculateResult = (amount, currency) => {
        const eur = 4.5256;
        const usd = 3.9798;
        const gbp = 5.4222;

        switch (currency) {
            case "EUR":
                return amount / eur;

            case "USD":
                return amount / usd;

            case "GBP":
                return amount / gbp;
        };
    };

    const changeResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        changeResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}