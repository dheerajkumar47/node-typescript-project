var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
// program to convert currencies
const convertCurrency = () => __awaiter(void 0, void 0, void 0, function* () {
    const { from, to, amount } = yield inquirer.prompt([
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
    ]);
    const response = yield fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}&apikey=X1b9nNdGPnedFguFnN2lsGDQH2ZRHJv8`
    // call with API Key
    );
    const { result } = yield response.json();
    console.log(`${amount} ${from} = ${result} ${to}`);
});
convertCurrency();
