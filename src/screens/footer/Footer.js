import React from "react";
import { Link } from "react-router-dom";
import footerLinks from "../../components/footerLinks/FooterLinks";
import "./footer.css";
let Footer = () => {
  return (
    <div className="footerSection text-left ">
      <div className="d-flex">
        <div>
          {["Legal", "Privacy Policy", "Shipping Policy"].map((link) => {
            return (
              <div key={link}>
                <Link to="" className="linkText">
                  {link}
                </Link>
              </div>
            );
          })}
        </div>
        <div className=" ml-4">
          {[
            "Refund/Return Policies",
            "Terms & Conditions",
            "Confidentiality",
          ].map((link) => {
            return (
              <div key={link}>
                <Link to="" className="linkText">
                  {link}
                </Link>
              </div>
            );
          })}
        </div>
        <div className=" ml-4">
          {["Contact Us", "Support", "Cookie Preferences"].map((link) => {
            return (
              <div key={link}>
                <Link to="" className="linkText">
                  {link}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};
export default Footer;
