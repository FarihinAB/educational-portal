const mongoose = require("mongoose");
//const { string } = require("prop-types");

const studentSchema = {
    module: String,
    email: String
}

const Student = mongoose.model("Students", studentSchema);

module.exports= Student;