// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("testReadme.md", generateMarkdown({ ...answers }));
    // Use user feedback for... whatever!!
  });
}

const generateContents = (toc) => {
  toc = data.contents;
  if (!toc) {
    return "";
  } else {
    for (let i = 0; i < data.contents.length; i++) {
      return `- ${data.contents[i]}`;
    }
  }
};

// Function call to initialize app
init();
