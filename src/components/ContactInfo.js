import React from "react";
import ContactImage from "../images/Patrick_Edet.jpg";

export default function ContactInfo(){
    return(
        <div className="ContactInfo">
        <img 
        src={ContactImage}
        alt="A Male "
        className="Contact-image"
        />
        <div>
<h1 className="ContactName">Patrick Edet</h1>
<h4 className='FrontendText'>Frontend Developer</h4>
<h4 className="contactsite"><a href="#">patrickedet.com</a></h4>
</div>
<div className='Buttons'>
        <button className="fa fa-email" ><a href='grandpato001@gmail.com'><span>&#9993;</span> Email</a></button>
        <button className="fa fa-linkedin"><a href='https://linkedin.com/in/PatrickEdet'>Linkedin</a></button>
        

        </div>
        </div>
    )
}
