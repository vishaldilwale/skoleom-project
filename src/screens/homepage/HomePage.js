import React from "react";
import BannerDescription from "../bannerImage/bannerDescription/BannerDescription";
import BannerImage from "../bannerImage/BannerImage";
import Registration from "../registration/Registration";

let HomePage=()=>{
    return(
        <React.Fragment>
            <BannerImage/>
            <BannerDescription/>
            <Registration/>
        </React.Fragment>
    )
}
export default HomePage;