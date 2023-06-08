const Joi = require('joi')

const express = require("express");

const app = express();
app.use(express.json())

const courses = [
  { id: 1, name: "javaSript" },
  { id: 2, name: "Node" },
  { id: 3, name: "typeScript" },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/post/:year/:month", (req, res) => {
  res.send(req.params);
});

app.get("/api/post", (req, res) => {
  res.send(req.query);
});



app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("course not found");
  res.send(course);
});


//post request with usening Joi validation
app.post('/api/courses',(req,res)=>{

  const schema =Joi.object().keys({
    name: Joi.string().min(3).max(10).required(),
  })
  
  let valid = schema.validate({name:req.body.name})
  if(valid.error){
    return res.status(400).send(valid.error.details[0].message)
  }else{
    const course={
      id:courses.length+1,
     name:req.body.name
    }
    courses.push(course);
    res.send(course)
    
    }
  })

  //************put request  */

  app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("course not found");

    const schema =Joi.object().keys({
      name: Joi.string().min(3).max(10).required(),
    })
    
    let valid = schema.validate({name:req.body.name})
    if(valid.error){
    return res.status(400).send(valid.error.details[0].message)}
    else{
      course.name = req.body.name
    res.send(course)

    }
  })

  
///detete api 
app.delete('/api/courses/:id',(req,res)=>{
  const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("course not found");

    const index= courses.indexOf(course);
    
    courses.splice(index,1)
    res.send(course);

})




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express is running on port${port}... `);
});



