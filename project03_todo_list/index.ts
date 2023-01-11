import inquirer from 'inquirer';
const todo_list = [];
function displayMenu(): any{
    let choice = 0;
    inquirer.prompt(
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: ['Add', 'Remove'],
        }
    ).then
    ((answers: any) => {
        switch (answers.choice)
        {
            case 'Add':
                choice = 1;
                break;
            case 'Remove':
                choice = 2;
                break;
        }
    });
    return choice;
}

console.log(displayMenu());