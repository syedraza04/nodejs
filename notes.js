// console.log('starting notes.js');

const addNote = (title,body) => {
    console.log('Adding note: ',title,body);
};

const readNote = (title) => {
    console.log('Reading Note: ');
    console.log(title)
};

const removeNote = (title) => {
    console.log('Removing Note');
    console.log(title)
};

var getAll = () => {
    console.log('getting all notes');
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    getAll
};