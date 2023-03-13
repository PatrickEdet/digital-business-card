import React from "react";
import ContactImage from "../images/Patrick_Edet.jpg";

export default function ImageComponent(){
    return(
        <div className="Hero-image">
        <img 
        src={ContactImage}
        alt="A Male "
        className="Contact-image"
        />
        </div>
    )
}
