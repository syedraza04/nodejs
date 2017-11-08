// console.log('starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try{
      let notesString = fs.readFileSync('notes-data.json');
      return JSON.parse(notesString);

    }catch(e){
      console.log(e);
      return [];
    }
};

const saveNotes= (notes) =>{
    console.log(notes);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
};

const addNote = (title,body) => {
    let notes = fetchNotes();
    let note ={title, body};
    let duplicateArray = notes.filter((note)=>note.title === title);
    (duplicateArray.length === 0) ?(notes.push(note),saveNotes(notes)):'';
    return note;
};

const readNote = (title) => {
    let notes = fetchNotes();
    let newNote= notes.filter((note)=>(note.title === title));
    return (newNote[0]);
};

const removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note)=>(note.title !== title));
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

const getAll = () => {
    console.log('getting all notes');
};

const logNotes = (meg,note) => {
    console.log(`Note ${meg}`);
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body:  ${note.body}`);
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    getAll,
    logNotes
};