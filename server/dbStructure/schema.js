const mongoose = require("mongoose");

const Structure = new mongoose.Schema({
    ProjectName : String , 
    ProjectDetails : String,
    ProjectLink : String , 
    ProjectGitRepository : String 
})

const Data  = mongoose.model("ProjectDetails",Structure )
module.exports = Data;
