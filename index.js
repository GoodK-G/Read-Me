// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using to create this README file?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown(data), (err) =>
err ? console.log(err) : console.log('Successfully wrote the information to the file!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> writeToFile('README.md', answers))
    .then(()=> console.log('README.md has been written to!'))
    .catch((err)=>console.error(err));
};
    


// Function call to initialize app
init();
