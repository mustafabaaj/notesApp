const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');
const getNotes = function () {
    return "your notes"
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) =>  note.title == title);
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
    saveNotes(notes);
    }else {
        console.log('Note title taken!');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if(notes.length > notesToKeep.length){
        console.log(chalk.green('IT WAS REMOVED'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red('IT WAS NOT REMOVED'));
    }

}
const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(err){
        return [];
    }

}

const listNote = () =>{
    const notes = loadNotes();
    console.log(chalk.red('Your notes'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const readNote = notes.find((note) => {
        return note.title === title
    });
    if(readNote){
        console.log(readNote.title);
        console.log(readNote.body);
    }else{
        console.log("no note found sorry")
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote:readNote
};