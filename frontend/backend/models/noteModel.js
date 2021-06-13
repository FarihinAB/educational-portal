const mongoose = require("mongoose");

const notesSchema = {
    no: String,
    assignment: String,
    duedate: String,
    url: String
}

const Note = mongoose.model("mynote", notesSchema);

module.exports = Note;