const add = require('./utlis.js');
const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


// Customize yargs version
yargs.version('1.1.0');

//add , remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: true
        }
    },
    handler: (argv) => {
       notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        console.log('removed');
        notes.removeNote(argv.title);
     }
});

yargs.command({
    command: 'read',
    describe: 'reading a new note',
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
});


yargs.command({
    command: 'list',
    describe: 'listing a new note',
    handler: (argv) => {
        notes.listNote(argv.title);
    }
});



yargs.parse();