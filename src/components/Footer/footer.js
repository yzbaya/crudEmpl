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
        py: 3,
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
        <div className="col-md-3">
          <h4>
            <span>S</span>ociété
          </h4>
          <a href="">Conditions d'annulation</a>
          <br />
          <br />
          <h4>
            <span>S</span>ervices client
          </h4>
          <a href="">Contact</a>
          <br />
          <a href="">Agences</a> <br />
          <a href="">Espace client</a>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <h4>
            <span>N</span>os Contact
          </h4>
          <div className="col-md border-bottom">
            <FaHome /> Avenue Abdelhamid El Kadhi, Z1 La Corniche Sousse 4000
            <br />
          </div>
          <div className="col-md border-bottom">
            <FaEnvelope /> contact@citygo.tn
            <br />
          </div>
          <div className="col-md border-bottom">
            <FaPrint /> +216 36 290 000
            <br />
          </div>
          <div className="col-md border-bottom">
            <FaPhone /> Tunisie: +216 53 168 168
            <br />
          </div>
          <div>
            <FaPhone /> France: +336 28 962 689
          </div>
        </div>
      </div>

      <div>
        <ul className="footer-col">
          <li>
            <b>Suivez-nous</b>
          </li>
          <div className="social-links">
            <li>
              <a href="">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="">
                <LinkedInIcon />
              </a>
            </li>
          </div>
        </ul>

        <div className="apropos1">
          © 2023 Tous droits réservés. Powered BY{" "}
          <span className="color">YZBaya</span>
        </div>
      </div>
    </Box>
  );
}
export default Footer;