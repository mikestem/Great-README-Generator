
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ## [license](#table-of-contents)
  ${data.license}

  ## [Contributing](#table-of-contents)
  ${data.contributing}

  ## [Tests](#table-of-contents)
  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
