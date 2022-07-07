function renderBadge(license){
    if (license==="MIT"){
        return "![MIT](https://img.shields.io/badge/license-MIT-blue)"
    } else if (license==="Apache 2.0"){
        return "![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-brightgreen)"
    }
    else{
        return ""
    }
}
function renderSection(license){
    if (license==="None"){
        return "";
    }
    else {
        return "- [License](#license)"
    }
}
function renderLicenseDetails(license){
    if (license==="MIT"){
        return `## License
for details about the MIT license, please visit [opensource.org](https://opensource.org/licenses/MIT)`
    } else if (license==="Apache 2.0"){
        return `## License
for details about the Apache 2.0 license, please visit [opensource.org](https://opensource.org/licenses/Apache-2.0)`
    }
    else{
        return "";
    }
}

function ReadMeTemplate(data) {
    return `# ${data.projectTitle} ${renderBadge(data.license)}
## Table of Contents
- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Features](#features)

${renderSection(data.license)}

## Description 
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Features
${data.features}

${renderLicenseDetails(data.license)}

`;
}
 
// export default ReadMeTemplate;
module.exports = ReadMeTemplate;