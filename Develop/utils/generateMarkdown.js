// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License: Apache](./assets/Apache.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Boost") {
    return "[![License: Boost](./assets/Boost.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license === "BSD 3-Clause License") {
    return "[![License: BSD 3-Clause License](./assets/BSD3.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "BSD 2-Clause License") {
    return "[![License: BSD 2-Clause License](./assets/BSD2.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }
  if (license === "MIT") {
    return "[![License: MIT](./assets/MIT.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "no license";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license === "BSD 3-Clause License") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "BSD 2-Clause License") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  }
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return;
  } else {
    return renderLicenseBadge(license) + " " + renderLicenseLink(license);
  }
}

// TODO: Create a function to generate markdown for README
const listContents = [];

const generateContents = (toc) => {
  if (!toc) {
    return "";
  } else {
    let formattedContent;
    for (let i = 0; i < toc.length; i++) {
      let items = `${toc[i]}`;
      listContents.push(items);
      formattedContent = listContents.map((content) => {
        return `- [${content}](#${content.toLowerCase()})\n`;
      });
    }
    return formattedContent.join("");
  }
};

const generateGithubLink = (username) => {
  return `[${username}](https://github.com/${username})`;
};
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description
  ${data.description}
  ## Table of Contents
  ${generateContents(data.contents)}
## Installation
${data.installation}
## Usage
${data.usage}
## Licenses
This Project is protected by ${renderLicenseSection(data.license)}
## Contributing
${data.contribute}
## Tests
${data.tests}
## Questions
Plese direct questions to ${data.email}
or ${generateGithubLink(data.username)}

 

`;
}

module.exports = generateMarkdown;
