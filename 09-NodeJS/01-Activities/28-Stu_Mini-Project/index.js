const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Name?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Bio?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Location?',
    },
]).then((responses) => {
    let contents = fs.readFileSync('template.html', 'utf8');

    for (const [key, value] of Object.entries(responses)) {
        contents = contents.replace(`{${key}}`, value);
    }

    fs.writeFileSync('result.html', contents);
    console.log('Done.');
});
