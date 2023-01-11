import inquirer from "inquirer";

const user = {
    "user_id": 1122,
    "user_pin": 1234,
    "user_name": "John Doe",
    "user_balance": 1000,
}

// input user_id and user_pin
const questions = [
    {
        type: "input",
        name: "user_id",
        message: "Enter your user id",
    },
    {
        type: "password",
        name: "user_pin",
        message: "Enter your user pin",
    },
];
inquirer.prompt(questions).then((answers) => {
    // if user_pin and user_id is correct then display user_name and user_balance
    if (answers.user_id == user.user_id && answers.user_pin == user.user_pin) {
        console.log(`Welcome ${user.user_name}`);
        console.log(`Your balance is ${user.user_balance}`);
    } else {
        console.log("Invalid user id or pin");
    }
});