// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "image";
  } else {
    console.log("this");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return;
  } else if (license === "Apache") {
    return renderLicenseBadge(license) + renderLicenseLink(license);
  }
}

// TODO: Create a function to generate markdown for README
const listContents = [];

const generateContents = (toc) => {
  console.log(toc);
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
  ## License

  ## Contributions
  ${data.contribute}
  ## Testing
  ${data.tests}
  ## Questions
  ${data.questions}
 

`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
