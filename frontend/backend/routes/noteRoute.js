const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

//
router.route("/files").post((req, res) =>{
    const no = req.body.no;
    const assignment = req.body.assignment;
    const duedate = req.body.duedate;
    const url = req.body.url;
    const newNote = new Note({
        no,
        assignment,
        duedate,
        url
    });

    newNote.save();
})

//display route
router.route("/todo").get((req, res) =>{
    
   
    
    Note.find({}, (err, allnotes) => {res.json(allnotes)})

    //Note.find({})
       // .then(foundNotes => console.log(foundNotes) )
})

module.exports = router;