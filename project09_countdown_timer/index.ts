import inquirer from "inquirer";

// countdown timer using inquirer
const countdown = async (seconds: number) => {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "timer",
            message: `Timer: ${seconds}`,
            choices: ["Continue", "Stop"],
        },
    ]);

    if (answers.timer === "Continue" && seconds > 0) {
        setTimeout(() => countdown(seconds - 1), 1000);
    }
};
countdown(10);