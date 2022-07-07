//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const ReadMeTemplate = require("./src/ReadMeTemplate");

const createFile = util.promisify(fs.writeFile);
//Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter GitHub username:'
        },
        {
            type:'input',
            name:'projectTitle',
            message:'What is the project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'list',
            name:'license',
            message:'Which license would you like to select?:',
            choices:["MIT","Apache 2.0","None"]
        },           
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use.'
        },
        {
            type:'input',
            name:'features',
            message:'List project features/languages:'
        },
    ])
};
//Create a function to write README file
//Create a function to initialize app
async function init() {
    try {
        const data = await promptUser();
        const createContent = ReadMeTemplate(data);

        await createFile('./sample/README.md', createContent);
        console.log('Successfully created README.md');
    } catch(err) {
        console.log(err);
    }
};
//Function call to initialize app
init();