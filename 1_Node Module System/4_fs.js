
const fs = require('fs')
// reading a file
let file = fs.readFileSync('f1.txt')
console.log('data after reading f1 file ',file)
// above line will give buffer data
// to convert buffer data into string we use concatenation 
console.log('data after reading f1 file '+ file)
// Writing a file
fs.writeFileSync('f2.txt','this is f2 file data')
console.log('file written successfully')

// Appending data to a file
fs.appendFileSync('f2.txt','\nthis is appended data')
console.log('data appended successfully')

// // Deleting a file
// fs.unlinkSync('f2.txt')
// console.log('file deleted successfully')
// fs module with directory
// creating a directory     
// fs.mkdirSync('myDirectory')
// console.log('directory created successfully')
// to check content we need from the directory
let folderpath = './myDirectory'
let folderContent = fs.readdirSync(folderpath)
// if we use coma then it will give array of files
console.log('content of the directory is ',folderContent) 
// if we use concatenation then it will give string of files
console.log('content of the directory is '+folderContent)
// to check whether directory exist or not
let doesExist = fs.existsSync('myDirectory')
console.log('does directory exist ',doesExist)
// to remove a directory
// to remove a directory it should be empty first   
// so first we need to delete all files inside the directory
// to delete files inside directory

// fs.unlinkSync('./myDirectory/f2.txt')
// fs.unlinkSync('./myDirectory/f3.txt')
console.log('file inside directory deleted successfully')
fs.rmdirSync('myDirectory')
console.log('directory removed successfully')