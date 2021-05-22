import React from "react";
import "./skbutton.css";

let SKButton=({label, styles})=>{
return(
    <React.Fragment>
        <button className="skBtn " style={styles}>
            {label}
        </button>
    </React.Fragment>
)
};
export default SKButton