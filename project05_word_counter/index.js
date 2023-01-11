import inquirer from "inquirer";
// program to count words in a paragraph
const countWords = (paragraph) => {
    const words = paragraph.split(" ");
    return words.length;
};
// count characters in a paragraph except spaces
const countCharacters = (paragraph) => {
    const characters = paragraph.split("");
    const filteredCharacters = characters.filter(function (character) {
        return character !== " ";
    });
    return filteredCharacters.length;
};
inquirer.prompt([
    {
        type: "input",
        name: "paragraph",
        message: "Enter a paragraph",
    },
]).then((answers) => {
    console.log(`Number of words in the paragraph: ${countWords(answers.paragraph)}`);
    console.log(`Number of characters in the paragraph: ${countCharacters(answers.paragraph)}`);
});
