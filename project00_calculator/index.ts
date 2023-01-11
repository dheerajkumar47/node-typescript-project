#!/usr/bin/env node
import inquirer from 'inquirer';

let firstNumber: number;
let secondNumber: number;
let operator: string;
inquirer.prompt(
    [
        {
            type: 'input',
            name: 'firstNumber',
            message: 'Enter first number',
            validate: (value: string) => {
                if (isNaN(Number(value))) {
                    return 'Please enter a number';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'secondNumber',
            message: 'Enter second number',
            validate: (value: string) => {
                if (isNaN(Number(value))) {
                    return 'Please enter a number';
                }
                return true;
            }
        },
        // enter operator
        {
            type: 'list',
            name: 'operator',
            message: 'Select operator',
            choices: ['+', '-', '*', '/']
        }
    ]
).then(
    (answers: any) => {
    firstNumber = Number(answers.firstNumber);
    secondNumber = Number(answers.secondNumber);
    operator = answers.operator;
    if (operator === '+') {
        console.log(firstNumber + secondNumber);
    }
    if (operator === '-') {
        console.log(firstNumber - secondNumber);
    }
    if (operator === '*') {
        console.log(firstNumber * secondNumber);
    }
    if (operator === '/') {
        console.log(firstNumber / secondNumber);
    }
}
);
