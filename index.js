const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is title for your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description for your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information for your project',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license will you use for your project?',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'no license']
    },
    {
        type: 'input',
        message: 'Please provide guidelines on how to contribute',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide how to test your project',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
         name: 'email',
    },
];

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
        });
    });
};

const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})