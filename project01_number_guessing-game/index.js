import inquirer from "inquirer";
// generate a random number between 1 and 10 in TypeScript
const randomNumber = Math.floor(Math.random() * 10) + 1;
// ask the user for a number between 1 and 10
inquirer.prompt([
    {
        type: "number",
        name: "number",
        message: "Guess a number between 1 and 10",
        validate: function (input) {
            if (input < 1 || input > 10) {
                return "Please enter a number between 1 and 10";
            }
            return true;
        }
    }
]).then((answers) => {
    if (answers.number === randomNumber) {
        console.log("You guessed the right number!");
    }
    else {
        console.log("You guessed the wrong number!");
        console.log(`The correct number was ${randomNumber}`);
    }
});
