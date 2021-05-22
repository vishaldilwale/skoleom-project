import React from "react";
import {BannerImg,SkoleumLogo} from "../../assets/index";
import SKButton from "../../components/button/SKButton";
import "./bannerImage.css";
 let BannerImage=()=>{
     return(
         <div style={{position:"relative"}}>
             <img style={{position:"absolute",left:"15px",top:"15px",height:"60px",width:"60px"}} src={SkoleumLogo} alt=""/>
             <img className="bannerImg" src={BannerImg} alt=""/>
             <SKButton styles={{position:"absolute",right:"12%",top:"50%"}} label="Watch on Skoleom"/>
         </div>
     )
 }
 export default BannerImage;