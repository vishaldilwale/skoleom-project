// import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import "./reCaptcha.css";

// let ReCaptcha = ({ onChange, className,error,style }) => {
//     let asyncScriptOnLoad = () => {
//         console.log("Captcha Ready");
//     };
//     return (
//         <React.Fragment>
//             <div style={style} className={"g-recaptcha"}>
//                 <ReCAPTCHA
//                     sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//                     onChange={onChange}
//                     theme={"light"}
//                     asyncScriptOnLoad={asyncScriptOnLoad}
//                     onErrored={() => console.log("Network error accured")}
//                 />
//             </div>
//             {error && 
//             <div className="">
//             <span className='d-flex align-items-center my-2'>
//               <i className="fa fa-exclamation-circle errorIcon" />
              
//               <p className="errorText mb-0 ">Captcha is required</p>
//               </span>
//             </div>
//             }
//         </React.Fragment>
//     );
// };
// export default ReCaptcha;
