const express = require("express");
const router = express.Router();
const Student = require("../models/studentsModels");

router.route("/addstudent").post((req, res) => {
    const module = req.body.module;
    const email = req.body.email;
    const newStudent = new Student({
        module,
        email
    });

    newStudent.save();
    console.log("studentroutes function")
})

//display route
router.route("/students").get((req, res) =>{
    
   
    
    Student.find({}, (err, allstudents) => {res.json(allstudents)})

})


module.exports = router;