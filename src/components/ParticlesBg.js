import React from "react";
import Particles from "react-tsparticles";

function ParticlesBg(){
  return(
    <Particles
      options={{
        background:{color:"#020617"},
        particles:{
          number:{value:60},
          size:{value:2},
          move:{speed:1},
          links:{enable:true,color:"#38bdf8"},
          color:{value:"#38bdf8"}
        }
      }}
    />
  )
}

export default ParticlesBg;
