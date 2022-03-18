#!/usr/bin/env node
const inquirer = require('inquirer');
const main=require('./main');
let helpFunc=require('./commands/help.js');
let organizepublic=require('./commands/organize');
inquirer
  .prompt([
    /* Pass your questions in here */
    {type: 'list',message:"pick the command you want to use:", name: "command", choices: [
        'organize',
        'tree',
        'help'
    ] }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    if(answers.command=='help'){
        helpFunc.help();
    }else if(answers.command=='organize'){
        inquirer
        .prompt([
            /* Pass your questions in here */
            {type: 'default',message:"Enter the path of Directory:", name: "Dirpath"  }
          ])
          .then((answers) => {
            organizepublic.organizepublic(answers.Dirpath);
          })
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });