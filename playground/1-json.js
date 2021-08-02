const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')

const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = 'mehboob'
data.age = 25

const userJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJson)





const arr = [2,3,4,5,6]
t=70;
const store = arr.find((a)=>a===t)
console.log(store)

// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.author)



// const book ={
//     title : 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson)