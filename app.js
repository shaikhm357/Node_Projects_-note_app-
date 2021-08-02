const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes')

const msg = notes.getNotes();
console.log(msg);
// customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note.',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        body:{
            describe: 'note body',
            demandOption:true,
            type: 'string'
        }
        
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
       
      //  console.log(argv.title);
    }
})

// create list command

yargs.command({
    command: 'list',
    describe: 'A list of all notes',
    handler(){
        notes.listNote()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Can read command',
    handler(){
        console.log('show the note content');
    }
})

// add, remove, read, list


//const command = process.argv[2]
//console.log(yargs.argv);
//console.log(yargs.command);
yargs.parse()