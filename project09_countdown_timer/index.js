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
// countdown timer using inquirer
const countdown = (seconds) => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.prompt([
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
});
countdown(10);
