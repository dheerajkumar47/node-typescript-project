import inquirer from "inquirer";

// program to count words in a paragraph
const countWords = (paragraph: string) => {
    const words: string[] = paragraph.split(" ");
    return words.length;
};
// count characters in a paragraph except spaces
const countCharacters = (paragraph: string) => {
    const characters: string[] = paragraph.split("");
    const filteredCharacters: string[] = characters.filter(
        function (character) {
            return character !== " "
        }
    );
    return filteredCharacters.length;
};

inquirer.prompt(
    [
        {
            type: "input",
            name: "paragraph",
            message: "Enter a paragraph",
        },
    ]
).then(
    function (answers) {
        console.log(`Number of words in the paragraph: ${countWords(answers.paragraph)}`);
        console.log(`Number of characters without space in the paragraph: ${countCharacters(answers.paragraph)}`);
    }
);