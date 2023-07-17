/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaHome, FaPhone, FaEnvelope, FaPrint } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";

import "./footer.css";
function Footer() {
  return (
    <Box
      sx={{
     
        borderRadius: 2,
        bgcolor: "#000",
        textAlign: "left",
        fontSize: "14px",
        color: "#fff",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "400",
      }}
    >
      <div className="row py-5 border-bottom">
        <div className="col-md-4 col-sm-12 ">
          <h4>
            <span>A</span>props
          </h4>
          <p>
            sfhssry,ry;ury,jcndhkufgnicyefrzyrfgizbyf
          </p>
        </div>
    
        <div className="">
          <h4>
            <span>N</span>os Contact
          </h4>
         
            <FaHome /> Avenue Abdelhamid El Kadhi, Z1 La Corniche Sousse 4000
            <br />
       
          
            <FaEnvelope /> contact@citygo.tn
            <br />
         
        
            <FaPrint /> +216 36 290 000
      
         
            <FaPhone /> Tunisie: +216 53 168 168
            <br />
       
      
            <FaPhone /> France: +336 28 962 689
         
        </div>
      </div>

    
        <div className="">
          
            <b>Suivez-nous</b>
         
          <div className="social-links">
            
              <a href="">
                <FacebookIcon />
              </a>
            
           
              <a href="">
                <InstagramIcon />
              </a>
         
        
              <a href="">
                <LinkedInIcon />
              </a>
         
          </div>
       

        {/* <div className="apropos1">
          © 2023 Tous droits réservés. Powered BY{" "}
          <span className="color">YZBaya</span>
        </div> */}
      </div>
    </Box>
  );
}
export default Footer;