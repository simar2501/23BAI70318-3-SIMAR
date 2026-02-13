import React, {useEffect, useState} from "react";

function Clock(){
  const [time,setTime]=useState(new Date());

  useEffect(()=>{
    setInterval(()=>setTime(new Date()),1000);
  },[]);

  return(
    <h3 style={{position:"absolute",right:40,top:90}}>
      {time.toLocaleTimeString()}
    </h3>
  )
}

export default Clock;
