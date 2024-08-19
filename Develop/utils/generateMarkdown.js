// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    else if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    else if (license === 'GPL-3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    else if (license === 'BSD-3-Clause') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    }
    else if (license === 'MPL-2.0') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }
    else {
        return ''
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/license/mit';
    }
    else if (license === 'Apache 2.0') {
        return 'https://www.apache.org/licenses/LICENSE-2.0';
    }
    else if (license === 'GPL-3.0') {
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    }
    else if (license === 'BSD-3-Clause') {
        return 'https://opensource.org/license/bsd-3-clause';
    }
    else if (license === 'MPL-2.0') {
        return 'https://www.mozilla.org/en-US/MPL/2.0/';
    }
    else {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license || license === 'none') {
        return '';
    }
    
    return `## License
    ${renderLicenseBadge(license)}
    This project is licensed under the [${license}] (${renderLicenseLink(license)}) license.`;
    

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}

  ##Description
  ${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

${renderLicenseSection(data.License)}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
If you have any questions, please feel free to contact me at [${data.Email}](mailto:${data.Email}). You can also find more of my work at [${data.Github}](https://github.com/${data.Github}).
`;
}

module.exports = generateMarkdown;
