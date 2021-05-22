import React, { useState } from "react";
import "./registration.css";
import {
  earlyExpTextImg,
  singerStanding,
  shoesImg,
  sweatShirt,
} from "../../assets/index";
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'
import {FaInstagram } from "react-icons/fa";
import SKButton from "../../components/button/SKButton";
import Footer from "../footer/Footer";
import { FormDataAPI } from "../../services/formData";

let Registration = () => {
  let [formObject, setFormObject] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
  });
  let [captcha,setCaptcha]=useState(undefined);
  let handleChange = (e) => {
    setFormObject({
      ...formObject,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formObject);
    try {
      const res = FormDataAPI(formObject)
        .then((response) => {
         console.log(response)
        })
        .catch((err) => {
          console.log(err?.response?.data);
        });
    } catch (err) {
      console.err("err", err);
    }
  };
  
  return (
    <div className="min-vh-100" style={{ background: "black" }}>
      <div className="w-100 "></div>
      <div className="d-flex flex-wrap pt-5">
        <div className="col-md-3 pl-md-5 pl-2">
          <div style={{ position: "ralative" }}>
            <img
              style={{ width: "290px", height: "450px", margin: "auto" }}
              src={singerStanding}
              alt=""
            />
            <SKButton
              styles={{ position: "absolute", bottom: "30px", left: "30%" }}
              label="Watch on Skoleom"
            />
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <div className="my-auto">
            <p className="text-white text-center mb-2 font-weight-bold">
              Registration
            </p>
            <form
              className="d-block mx-auto"
              style={{
                padding: "10px",
                background: "#ffbf00",
                width: "450px",
                maxWidth: "100%",
                maxWidth: "90%",
              }}
              id="demo-form"
              onSubmit={handleSubmit}
            >
              <input
                className="text-center textInput mt-2 d-block form-control"
                placeholder="Insert your last name"
                type="text"
                name="last_name"
                required={true}
                onChange={handleChange}
              />
              <input
                className="text-center textInput mt-2 d-block form-control"
                placeholder="Insert your first name"
                type="text"
                name="first_name"
                required={true}
                onChange={handleChange}
              />
              <input
                className="text-center textInput mt-2 d-block form-control"
                placeholder="Insert your email name"
                type="text"
                name="email"
                required={true}
                onChange={handleChange}
              />
              <select
                defaultValue="Insert your country"
                className="w-100 py-2 mt-2 textInput border-0 text-center"
                placeholder="Select Country"
                name="country"
                required={true}
                onChange={handleChange}
              >
                <option selected={true} className="text-center" value="">
                  Insert your country
                </option>
                <option value="uae">UAE</option>
                <option value="usa">USA</option>
                <option value="africa">Africa</option>
                <option value="india">India</option>
              </select>
              <input
                type="submit"
                className="submitBtn font-weight-bold my-2 text-center"
                value="Send"
              />
            </form>
          </div>
          <div className="col-md-4 my-2 d-md-none d-block px-0">
            <img
              className="img-fluid d-md-none d-block"
              style={{ width: "400px" }}
              src={earlyExpTextImg}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <p className="mb-2 text-white font-weight-bold">Best Sellers</p>
            <div className="mx-auto">
              <div
                className=" d-md-flex d-block text-left mx-auto p-1"
                style={{
                  width: "300px",
                  maxWidth: "100%",
                  fontSize: "12px",
                  color: "#d4c9c9",
                  background: "#593d7f",
                }}
              >
                <img
                  className="mx-auto"
                  style={{ height: "164px", width: "100%" }}
                  src={sweatShirt}
                  alt=""
                />
                <div className="pl-1">
                  <p className="mb-0">Dsquared2</p>
                  <p className="mb-0">Dsquared2 Logo Sweatshirt - Farfetch</p>
                  <p className="mb-0 ">$ 920,00</p>
                  <p className="mb-0 ">
                    In :
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {" "}
                      Amazon
                    </span>
                  </p>

                  <SKButton
                    styles={{
                      height: "20px",
                      fontSize: "12px",
                      width: "100%",
                      marginTop: "8px",
                      textAlign: "left",
                      height: "30px",
                    }}
                    label="Cut"
                  />
                  <SKButton
                    styles={{
                      height: "20px",
                      fontSize: "12px",
                      marginTop: "5px",
                      width: "100%",
                      height: "30px",
                    }}
                    label="Add to Cart"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto mt-4"
            style={{ width: "300px", maxWidth: "100%", position: "relative" }}
          >
            <p className="mb-2 text-white font-weight-bold">Suggest for you</p>
            <img
              style={{ width: "300px", maxWidth: "100%" }}
              src={shoesImg}
              alt=""
            />
            <div
              style={{ position: "absolute", bottom: "10px", width: "100%" }}
            >
              <SKButton
                styles={{
                  height: "20px",
                  fontSize: "12px",
                  marginTop: "5px",
                  height: "30px",
                }}
                label="Access"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="col-md-4 px-0">
          <div className="text-left mt-4 ml-md-5" style={{ fontSize: "20px" }}>
            <FaFacebookSquare
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: "white",
                marginRight: "12px",
              }}
            />
            <FaTwitter
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: "white",
                marginRight: "12px",
              }}
            />
            <FaInstagram
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: "white",
                marginRight: "12px",
              }}
            />
            <FaYoutube
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: "white",
                marginRight: "12px",
              }}
            />
          </div>
          <div className="ml-md-5 mt-4 ml-3">
            <Footer />
          </div>
        </div>
        <div className="col-md-4 px-0">
          <img
            className="img-fluid mt-4 d-md-block d-none"
            style={{ width: "500px",maxWidth:"100%",height:"180px" }}
            src={earlyExpTextImg}
            alt=""
          />
        </div>
      </div>
      <p
        className="mb-0 mt-5 pt-5 pb-2 ml-md-5 ml-2 text-left"
        style={{ fontSize: "12px", color: "#6c879b" }}
      >
        © 2021 - Skoleom 
        <span style={{ marginLeft: "10px", fontSize: "9px" }}>
          © Early Adopter Experience - All right reserved 2021
        </span>
      </p>
    </div>
  );
};
export default Registration;
