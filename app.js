// console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs=require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];
const argv = yargs.argv;

const permittedCommands = ['add','list','read','remove'];

permittedCommands.map((values)=>{
    if(command.indexOf(values) === -1 ){
    console.log('Command not found');
    } else{
       switch(command){
          case 'add':
             let note = notes.addNote(argv.title,argv.body);
             console.log(note);
              if (note){
                  notes.logNotes('Added',note);
              }else{
                  console.log('Duplicate title Already Exists');
              }
             break;
          case 'list':
             notes.getAll();
             break;
          case 'read':
              let note2 = notes.readNote(argv.title);
              if (note2){
                  notes.logNotes('Read',note2);

              }else{
                  console.log('Note not Read');
              }
              break;
          case 'remove':
             let noteRemoved = notes.removeNote(argv.title);
             (noteRemoved) ? console.log('Note Removed'):console.log('Note Not Removed');
             break;
        }
    }

});



