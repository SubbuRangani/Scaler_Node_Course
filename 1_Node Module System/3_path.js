console.log("Hi ")
const path=require('path')
// to know the file extention
let ext = path.extname('D:\\My Courses\\demo.js')
console.log(ext,"hello")
// to know base name
let basename=path.basename('D:\\My Courses\\demo.js')
console.log(basename)
// to know the current file we are working on
console.log(__filename)
// to know the directory name
console.log(__dirname)
// to know the parse the path   
console.log(path.parse('D:\\My Courses\\demo.js'))
// to know the join the path
console.log(path.join(__dirname,'/test','/hello.html'))
// to know the resolve the path
console.log(path.resolve(__dirname,'/test','/hello.html'))
// to know the normalize the path
console.log(path.normalize('D:\\My Courses\\\\\\demo.js'))
// to know the relative path    
console.log(path.relative('D:\\My Courses\\demo.js','D:\\My Courses\\test\\hello.html'))
// to know the sepator of current os
console.log(path.sep)
// to know the delimiter of current os
console.log(path.delimiter)
// to know the is absolute path or not
console.log(path.isAbsolute('D:\\My Courses\\demo.js'))
console.log(path.isAbsolute('demo.js'))
