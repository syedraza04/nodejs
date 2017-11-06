// console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

let addNote = notes.addNote();
const user = os.userInfo();

console.log(_.isString('true'));
console.log(_.uniq([23,1,4,4,2,4,4]));

fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age} years old and addition is ${notes.addNote(2,9)}`,function(err){
    console.log(err);
});

// console.log('user: ');
