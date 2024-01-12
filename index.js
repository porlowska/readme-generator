const fs = require("fs");
const inquirer = require("inquirer");

let licenseList = ['None','APACHE 2.0', 'BSD 3','GPL 3.0', 'MIT']

inquirer
    .prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Add link to the deployed appliacation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'screeensshot',
        message: 'If you would like to add screenshot add file with .png extention to "img" folder nad type the name here',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: licenseList
    },
    {
        type: 'input',
        name: 'contribiuting',
        message: 'Add guidelines how other developers can add to your project/application',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write test for your application and provide examples on how to run it.',
    },
    {
        type: 'input',
        name: 'questionsGit',
        message: 'provide your GitHub username',
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'provide your email address',
    }
    ])
    .then(answers => {

        let badge = ''
    switch (answers.license) {
        case 'None':
            badge = '';
            break;
        case 'APACHE 2.0': 
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'BSD 3': 
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break; 
        case 'GPL 3.0':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        }

        let content = 
` ${badge}
# ${answers.title} 

## Descripion
${answers.description} 

## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation} 

[Deployed application](${answers.link})

## Usage 
${answers.usage}

![Screenshot](/img/${answers.screenshot})

## Usage 
${answers.credits}

## License

${answers.license}

## Contributing

${answers.contribiuting}

## Tests
${answers.tests}


## Questions
If you have any additional question, you can find me on GitHub [${answers.questionsGit}](https://github.com/${answers.questionsGit})

or send me an email at: ${answers.questionsEmail}`


        fs.writeFile(`generated-readme/${answers.title}-Readme.md`, content, ((err) =>
        err ? console.log(err) : console.log('Success!')))
    });