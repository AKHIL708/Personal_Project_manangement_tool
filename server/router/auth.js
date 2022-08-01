const express = require("express");
const router = express.Router();
const projectmanagementStructure = require("../dbStructure/schema");
router.use(express.json());

router.get("/", (req, res) => {
  res.send("showing home Page From router");
});
router.get("/uploadData", (req, res) => {
  res.send("showing ABOUT Page From router");
});
router.get("/getData", (req, res) => {
  res.send("User Data");
});

router.post("/getData", async (req, res) => {
  let ProjectName = req.body.ProjectName;
  const findingData = await projectmanagementStructure.find({
    ProjectName: ProjectName,
  });
  res.send(findingData);
});

router.post("/uploadData", async (req, res) => {
  const { ProjectName, ProjectDetails, ProjectLink, ProjectGitRepository } =
    req.body;
  try {
    const Data = await projectmanagementStructure.findOne({
      ProjectName: ProjectName,
    });
    if (Data) {
      res.status(400).json({message : "project name already Exist use Another name"});
    } else if (
      !ProjectName ||
      !ProjectDetails ||
      !ProjectLink ||
      !ProjectGitRepository
    ) {
      res.status(400).json({message : "fill all the details"});
    } else {
      const ProjectData = await new projectmanagementStructure(req.body);
      res.status(200).send(ProjectData);
      ProjectData.save();
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});
router.get("/delete-item",async (req,res)=>{
   res.send("delting apge")
})
router.post("/delete-item",async (req,res)=>{
  // let name = req.body.projectName
  try {
    const data = await projectmanagementStructure.deleteOne({ProjectName : req.body.projectName})
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

module.exports = router;
