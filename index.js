// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What license are you using to create this README file?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = 'README.md'
fs.writeFile(fileName, JSON.stringify(data), (err) =>
err ? console.log(err) : console.log('Successfully wrote the information to the file!')
);
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
