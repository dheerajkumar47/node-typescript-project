import inquirer from "inquirer";

// program to convert currencies
const convertCurrency = async () => {
    const { from, to, amount } = await inquirer.prompt(
        [
        {
            type: "list",
            name: "from",
            message: "From",
            choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD"],
        },
        {
            type: "list",
            name: "to",
            message: "To",
            choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD"],
        },
        {
            type: "input",
            name: "amount",
            message: "Amount",
        },
    ]
    );

    const response = await fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}&apikey=X1b9nNdGPnedFguFnN2lsGDQH2ZRHJv8`
        // call with API Key
    );
    const {result} = await response.json();
    console.log(`${amount} ${from} = ${result} ${to}`);
};
convertCurrency();