console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs=require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];
const argv = yargs.argv;

console.log('Yargs',argv);
console.log('Args',process.argv);
// let flag = 0;
//
const loggingFunc = (input) => {
    console.log(input);
};
//
const permittedCommands = ['add','list','read','remove'];

permittedCommands.map((values)=>{
    if(command.indexOf(values) === -1 ){
    console.log('Command not found');
    // flag++;
    } else{
       switch(command){
          case 'add':
             notes.addNote(argv.title,argv.body);
             break;
          case 'list':
             notes.getAll();
             break;
          case 'read':
             notes.readNote(argv.title);
             break;
          case 'remove':
             notes.removeNote(argv.title);
             break;
        }
    }

});



