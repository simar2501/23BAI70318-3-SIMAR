import React from "react";
import "../styles/style.css";

function Projects(){
  return(
    <div style={{textAlign:"center"}}>
      <h1 style={{marginTop:"60px"}}>My Projects</h1>

      <div className="project-container">
        <div className="card">
          <h2>AI Chatbot</h2>
          <p>NLP based chatbot</p>
        </div>

        <div className="card">
          <h2>Face Detection</h2>
          <p>OpenCV ML system</p>
        </div>

        <div className="card">
          <h2>CGPA Predictor</h2>
          <p>ML prediction model</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
