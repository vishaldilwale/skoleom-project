import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SKEventTitle,
  songTeaser,
  playBtn,
  skoleomCircleBtn,
  rightCheckImg,
} from "../../../assets/index";
import SKButton from "../../../components/button/SKButton";
import "./bannerDescription.css";

let BannerDescription = () => {
  let [showVideo, setShowVideo] = useState(true);
  let [videoPlay, setVideoPlay] = useState(false);
  let handleVideoPlay = () => {
    let vid = document?.getElementById("video");
    if (videoPlay) {
      vid?.pause();
      setVideoPlay(false);
    } else {
      vid?.play();
      setVideoPlay(true);
    }
  };
  let playVideoOnLoad=(value)=>{
    let vid = document.getElementById("video");
    vid?.play();
    setVideoPlay(true);
  }

  useEffect(()=>{
    // handleVideoPlay();
  },[ ])
  return (
    <div style={{ minHeight: "50vh", background: "black", width: "100%" }}>
      <div className="py-4 d-flex flex-wrap px-0 mx-0">
        <div className="col-md-6 px-md-5 px-2">
          <p
            className="descriptionTitle mb-0 text-left "
            style={{ position: "relative", left: "30%",fontSize:"18px",fontWeight:"bolder" }}
          >
            SKOLEOM
          </p>
          <p
            className="descriptionTitle mb-0 text-left font-weight-bold"
            style={{ fontStyle: "italic",fontSize:"17px" }}
          >
            BUT EVERYTHING YOU TOUCH ON YOUR SCREEN
          </p>
          <p className="mb-0 text-white text-left mt-2 font-weight-bold" style={{fontSize:"15px"}}>
            Skoleom allows users to interact within their video. This eCommerce
            platform 3.0* converges data from international websites to its new
            generation interactive player to give its users the best possible
            experience.
          </p>
          <p className="mb-0 mt-5 text-white text-left mx-auto font-weight-bold signUpText" 
          style={{fontSize:"15px"}}>
            Sign up to{" "}
            <Link to="" style={{ color: "white", textDecoration: "underline" }}>
              participate in our Early Adopter Experience{" "}
            </Link>
            and help us to further improve more our future services.
          </p>
        </div>
        <div className="col-md-6 d-block">
          <div className="position-relative">
            {showVideo && (
              <div className="bannerVideoSection">
                <span
                  onClick={() => {setShowVideo(false);setVideoPlay(false)}}
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-5px",
                    color: "red",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  &#10006;
                </span>
                <video
                  autoPlay={true}
                  loop={true}
                  id="video"
                  autoPlay={true} 
                  className="videoFile p-2"
                >
                  <source src={songTeaser} type="video/mp4" />
                </video>
                <div className="d-flex justify-content-between px-md-3 px-2">
                  <img src={skoleomCircleBtn} className="videoBtns" alt="" />
                  {!videoPlay &&
                  <img
                    src={playBtn}
                    onClick={handleVideoPlay}
                    className="videoBtns"
                    alt=""
                  />}
                  {videoPlay &&
                  <span onClick={handleVideoPlay} style={{color:"red",cursor:"pointer"}}>&#10074; &#10074;</span>}
                  <img src={rightCheckImg} className="videoBtns" alt="" />
                </div>
              </div>
            )}
            {!showVideo && (
              <div className="mx-auto my-2" onClick={() => {setShowVideo(true);handleVideoPlay()}}>
                <img src={playBtn} className="videoBtns" alt="" />
              </div>
            )}
            <img
              onClick={() => {setShowVideo(true);handleVideoPlay()}}
              src={SKEventTitle}
              className={showVideo ? "skEventTitle text-center" : "skEventTitleHiddenVideo text-center"}
              alt=""
            />
          </div>
          <SKButton
            className="d-block mt-2"
            onClick={() => setShowVideo(true)}
            styles={{ background: "#5ce1e6",marginTop:"10px" }}
            label="On Skoleom"
          />
          <p
            className="mb-0 mt-3 pb-4 w-75 mx-auto"
            style={{ fontSize: "10px", fontWeight:"bold", color: "#247151" }}
          >
            * 3.0 e-commerce platform is characterized by: the vision of an
            element ( product/service/object) in a skoleomized content - the
            acquisition of the element by touch for an act of purchase - the
            delivery of the element physically or digitally
          </p>
        </div>
      </div>
    </div>
  );
};
export default BannerDescription;
