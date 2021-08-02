const chalk = require("chalk")
const fs = require('fs')

function getNotes(){
    return chalk.green.inverse('Your notes...')
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicate = notes.filter((note)=>{
        return note.title === title
    })
    if(duplicate.length === 0){

        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green('added successfully'))
       // console.log('new note added',notes)
    }else{
        console.log(chalk.red('note title taken'))
    }

}



const removeNote = function(title){
    const notes = loadNotes()
   const remain =  notes.filter(note=>note.title !== title)
    console.log(remain)
    //console.log(title)
    saveNotes(remain)
    if(notes.length > remain.length ){
        console.log(chalk.green.inverse('note removed successfully'))
    }else{
        console.log(chalk.red.inverse('no matched note'))
    }
}


const listNote = function(){
    console.log('list')
    const notes = loadNotes()
    notes.forEach(note =>
        console.log(note.title));
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(err){
        return []
    }
}
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', dataJson)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote
}


