import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "../styles/style.css";

function Home(){
  return(
    <motion.div 
      className="hero"
      initial={{opacity:0,y:60}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}
    >
      <h1>AI/ML Developer</h1>

      <h2 style={{color:"white", marginTop:"20px"}}>

        <TypeAnimation
          sequence={[
            "Future Software Engineer 🚀",
            2000,
            "React + AI Developer 💻",
            2000,
            "Chandigarh University 🔥",
            2000
          ]}
          speed={50}
          repeat={Infinity}
          style={{color:"white"}}
        />

      </h2>

      <p style={{marginTop:"20px"}}>
        Creating modern intelligent web experiences
      </p>

    </motion.div>
  )
}

export default Home;
