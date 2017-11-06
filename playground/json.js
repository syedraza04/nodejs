
// var obj = {
//     name:'Andres'
// };
//
// var obj2 = '{"name":"Andres"}';
//
// var strObj = JSON.stringify(obj);
// var strObj2 = JSON.parse(obj2);
// console.log(strObj);
// console.log(strObj2);

const fs = require ('fs');

let originalNote = {
    title:'Some title',
    body:'Some Body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);
let noteString  = fs.readFileSync('notes.json');
const jsonNote = JSON.parse(noteString);

console.log(typeof jsonNote);
console.log(jsonNote.title);
