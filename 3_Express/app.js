const express= require('express')
const app=express()
// Get route ,post,put,delete
const courses=[{id:1,name:'JavaScript'},
{id:2,name:'Python'},
{id:3,name:'Java'},
]
// Above courses is an array of objects is used for Handling multiple routes
app.get('/',(req,res)=>{
    res.send('Hello World from Express hii')
})

app.get('/about',(req,res)=>{
    res.send('This is about page')
})
app.get('/contact',(req,res)=>
res.send('hey there contact me at 1234567890')
)
// Environment variables and port
// Port is a inbuilt application programming interface(API) that helps to identify a specific process or application running on a server.
// Port is a number that ranges from 0 to 65535. Ports 0 to 1023 are reserved for well-known services and protocols, while ports 1024 to 49151 are registered for specific applications. Ports 49152 to 65535 are dynamic or private ports that can be used by any application.
// const PORT= process.env.PORT || 3000
const PORT=process.env.PORT || 3000
app.listen(PORT,()=> console.log(`Post is running on port ${PORT}`))
//Route parameters (req.params is used to store the route parameters)

// app.get('/courses/:id',(req,res)=>{
//     console.log(req.params)
//     // res.send(req.params)
//     let course=courses.find(course=>course.id===parseInt(req.params.id))
//     res.send(course)
// })

// we also can do using Name parameter
app.get('/courses/:coursename',(req,res)=>{
    console.log(req.params.coursename)
    // res.send(req.params)
    let course=courses.find(course=>course.name===req.params.coursename)
    if(!course) return res.status(404).send('The course with the given name was not found')
    res.send(course)
})


 
 

app.listen(3000,()=> console.log('Server is running on port 3000'))
