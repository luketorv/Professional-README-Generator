function ReadMeTemplate(data) {
    return `
    <h1>${data.projectTitle}</h1>
     ## Table of Contents
    - [Description](#description)

    - [Installation](#installation)

    - [Usage](#usage)

    - [Credits](#credits)

    - [License](#license)

    - [Features](#features)

    - [Contributing](#contributing)
    ## Description 
      ${data.description}
    ## Installation
      ${data.installation}
    ## Usage
      ${data.usage}
    ## Features
      ${data.features}
  `;
  }
  
  module.exports = ReadMeTemplate;