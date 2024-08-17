// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of your project?",
    },
    {
        type: "input", 
        name: "Description",
        message: "Give a brief description of the project.",
    }, 
    {
        type: "checkbox", 
        name: "License",
        message: "Select a license for your project.",
        choices: ["MIT", "Apache 2.0", "GPL-3.0", "BSD-3-Clause", "MPL-2.0","none"],
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide the instructions and examples for using your project.",
    },
    {
        type: "input",
        name: "Contributing",
        message: "Provide guidelines on how others can contribute to your project.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Provide instructions on how to run tests for your project.",
    },
    {
        type: "input",
        name: "Github",
        message: "Your Github username:",
    },
    {
        type: "input", 
        name: "Email",
        message: "Your email address:",
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.error("Error writing file: ", err);   
        }
        console.log("README successful!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README...");
        writeToFile("", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
