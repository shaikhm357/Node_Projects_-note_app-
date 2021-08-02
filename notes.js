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
        console.log('new note added',notes)
    }else{
        console.log('note title taken')
    }

}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', dataJson)
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}


