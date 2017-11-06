console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];
console.log(command);
let flag = 0;

const loggingFunc = (input) => {
    console.log(input);
};

const permittedCommands = ['add','list','read','remove'];

permittedCommands.map((values)=>{
    if(command.indexOf(values) === -1 && flag === 0){
    console.log('Command not found');
    flag++;
   }else{

        switch(command){
            case 'add':
                loggingFunc('adding new note');
                break;
            case 'list':
                loggingFunc('Listing all notes');
                break;
            case 'read':
                loggingFunc('Reading note');
                break;
            case 'remove':
                loggingFunc('Removing note');
                break;
        }
    }

});



