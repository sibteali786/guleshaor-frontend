import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="span-1">
        <h4>GuleShaor</h4>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/referrals">Referrals</Link>
          <Link to="/services">Services</Link>
          <Link to="/team">Team</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/resources">Resources</Link>
        </div>
      </div>
      <div className="span-2">
        <h4>Collaborate</h4>
        <div>
          <Link to="/referrals">Referrals</Link>
          <Link to="/exchange">Exchange</Link>
          <Link to="/opportunities">Opportunities</Link>
        </div>
      </div>
      <div className="span-3">
        <h4>My Account</h4>
        <div>
          <Link to="/session">Sessions</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      <div className="span-4">
        <h4>Information</h4>
        <div>
          <Link to="/about">Terms & Conditions</Link>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/careers">Jobs</Link>
        </div>
      </div>
      <div className="span-5">
        <h4>Get Connected</h4>
        <div>
          <Link to="/contact">Contact</Link>
          <a
            href="mailto:guleshaor.management@gmail.com"
            target="_blank"
            rel="noreferrer"
            >
            guleshaor.management@gmail.com
          </a>
        </div>
      </div>
      <div className="span-6">
        <h4>Follow Us</h4>
        <div className="social-links">
          <IconButton>
            <a href="www.facebook.com">
              <FacebookRoundedIcon />
            </a>
          </IconButton>
          <IconButton>
            <a href="www.twitter.com">
              <TwitterIcon />
            </a>
          </IconButton>
          <IconButton>
            <a href="www.instagram.com">
              <InstagramIcon />
            </a>
          </IconButton>
          <IconButton>
            <a href="www.linkedIn.com">
              <LinkedInIcon />
            </a>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
