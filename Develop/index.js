// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const renderLicenseBadge = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "checkbox",
    name: "contents",
    message: "What would you like to include in the table of contents?",
    choices: [
      "Installation",
      "Usage",
      "Licenses",
      "Contributing",
      "Tests",
      "Questions",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage for your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Do you have any of these licenses?",
    choices: [
      "Apache",
      "Boost",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "MIT",
      "None",
    ],
  },
  {
    type: "input",
    name: "contribute",
    message: "How would like others to contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can others test this project?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    writeToFile("ReadmeFinal.md", generateMarkdown({ ...answers }));
    // Use user feedback for... whatever!!
  });
}

// Function call to initialize app
init();
