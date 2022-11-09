const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'languages',
        choices: [
            'Spanglish',
            'Spatulese',
            'Ignoranese',
            'Jomamane',
        ],
    },
    {
        type: 'input',
        message: 'What is your preferred method of communication?',
        name: 'communication',
    },
]).then((answers) => {
        console.log(answers);
        const textToWrite = JSON.stringify(answers);
        fs.writeFile('answers.txt', textToWrite, (err) => {
            console.log(err);
        });
});
