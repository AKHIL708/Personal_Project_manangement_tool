import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectList from "./ProjectList";

export default function UploadData() {
  const [findingData, setFindingData] = useState("");
  const [getData, setGetData] = useState("");
  const [listing, setListing] = useState([]);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [gitlink, setGitLink] = useState("");
  const [details, setDetails] = useState("");
  const [gitName, setGitName] = useState("");

  const [headingName, setHeadingName] = useState("");
  const [headingGitRepo, setHeadingGitRepo] = useState("");
  const [headingLink, setHeadingLink] = useState("");
  const [headingDetails, setHeadingDetails] = useState("");
  const [link, setLink] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [demo, setDemo] = useState([]);

  const arrayDeleteFunction = ()=>{
    // console.log(`first => ${listing}`)
    let remainingData = listing.filter((data,index)=>{
     let findingIndex = listing.findIndex((e)=>{
       return e == index
     })
    console.log("one")
    console.log(findingIndex)
    console.log("two")
    return data != findingIndex
   })
   setListing(remainingData)
  //  console.log(`second output => ${listing}`)
  }


  const GetData = async (e) => {
    e.preventDefault();

    const GetData = await fetch("/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gettingData: getData,
      }),
    })
      .then((res) => res.json())
      .then((data) => setDemo(data));
  };

  const DeleteData = async (e) => {
    e.preventDefault();

    const res = await fetch("/deleteItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DeleteProjectName: findingData,
      }),
    });
    if (!res) {
      window.alert("already present");
    } else {
      toast.success("Deleting Successfully... ", {
        position: "top-center",
        autoClose: 800,
      });
    }
  };

  const PostProject = async (e) => {
    e.preventDefault();

    const res = await fetch("/uploadData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProjectName: projectName,
        ProjectDetails: projectDetails,
        ProjectLink: projectLink,
        ProjectGitRepository: projectUrl,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      toast.error("Change Project name or fill all the details properly", {
        position: "top-center",
        autoClose: false,
      });
    } else {
      toast.success("Data saving sucessfully... ", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        toast.success("saved.", {
          position: "top-center",
          autoClose: 500,
        });
      }, 2500);

      setTimeout(() => {
        setName(projectName);
        setGitLink(projectLink);
        setUrl(projectUrl);
        setDetails(projectDetails);
        setGitName("Git Repository Link (tap)");
        setHeadingName("Project-Name");
        setHeadingGitRepo("GitHub-Repo");
        setHeadingLink("ProjectLink");
        setHeadingDetails("Project-Details");
        setLink("Project-Link (tap)");
        setListing((current) => {
          return  [
          ...current,
          <ProjectList
            projectname={name}
            projectgitRepo={url}
            projectLink={gitlink}
            projectDetails={details}
            gitName={gitName}
            headingName={headingName}
            headingGitRepo={headingGitRepo}
            headingLink={headingLink}
            headingDetails={headingDetails}
            Link={link}
            arrayDeleteFunction={arrayDeleteFunction}
            arrayListDeleteBtn={"Delete Data"}
          />,
        ]});
        setProjectName("");
        setProjectLink("");
        setProjectDetails("");
        setProjectUrl("");
      }, 4000);
    }
  };
  const [akhil , setAkhil ] = useState("akhil" + "Nayak")
  return (
    <>
    <h1>{akhil}</h1>
      <div>
        {demo.map((data, index) => {
          console.log(data._id);
     if(Math.random() > 0.5){
     return  setAkhil(data.projectName)
     }
      //  return    <div key={index}>{data.projectName}</div>;
        })}
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "80px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {" "}
        Enter Project Details{" "}
      </h1>
      <div className="uploadContainer">
        <form method="POST">
          <div className="uploadInputSection">
            <FaPenFancy className="projectIcons" />
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              type="text"
              name="projectName"
              placeholder="Project Name"
            />
          </div>
          <div className="uploadInputSection">
            <FiExternalLink className="projectIcons" />
            <input
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              type="text"
              name="projectUrl"
              placeholder="Git Repository link"
            />
          </div>
          <div className="uploadInputSection">
            <FaLink className="projectIcons" />
            <input
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              type="text"
              name="projectLink"
              placeholder="Project Link"
            />
          </div>
          <div className="uploadInputSection">
            <TbListDetails className="projectIcons" />
            <input
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              type="text"
              name="projectDetails"
              placeholder="Project Details"
            />
          </div>

          <input type="submit" onClick={PostProject} className="submitBtn" />
        </form>
        <ToastContainer />
      </div>
      <div className="dataContaiiner">
        <form method="POST" className="deleteInput">
          <h1>Enter Project Name To Delete : </h1>
          <input
            type="text"
            className="deleteInputInput"
            value={findingData}
            onChange={(e) => setFindingData(e.target.value)}
          />
          <input className="deleteBtn" type="submit" onClick={DeleteData} />
        </form>

        <form method="POST">
          <h1>Get Project Details : </h1>
          <input
            type="text"
            className="deleteInputInput"
            value={getData}
            onChange={(e) => setGetData(e.target.value)}
          />
          <input type="submit" onClick={GetData} />
        </form>
      </div>

      <h1 style={{ color: "green" }}>Your Projects</h1>

      <div className="ProjectListingComponent">
        {listing.map((data) => {
          return <div className="ProjectListingComponents">{data}</div>;
        })}
      </div>
    </>
  );
}
