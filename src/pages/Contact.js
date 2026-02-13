import React from "react";
import "../styles/style.css";

function Contact(){
  return(
    <div className="contact">
      <h1>Contact Me</h1>

      <input type="text" placeholder="Your Name" /><br/>
      <input type="email" placeholder="Your Email" /><br/>
      <textarea placeholder="Your Message"></textarea><br/>
      <button>Send Message</button>
    </div>
  )
}

export default Contact;
