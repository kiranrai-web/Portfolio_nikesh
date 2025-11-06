import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import { FooterOverlay, Newsletter } from '../../components';
import images from "../../constants/image";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding p__roboto" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Me</h1>
        <div className="app__footer-location app__footer-info_logo">
          <FaLocationDot />
          <p className="p__opensans">Sydney, Australia</p>
        </div>
        <div className="app__footer-phone app__footer-info_logo">
          <FaPhone />
          <p className="p__opensans">+61 421718952</p>
        </div>
        <div className="app__footer-whatsapp app__footer-info_logo">
          <IoLogoWhatsapp />
          <p className="p__opensans">+61 421718952</p>
        </div>
        <div className="app__footer-gmail app__footer-info_logo">
          <MdEmail />
          <p className="p__opensans" style={{ textTransform: "lowercase" }}>nikeshthapa4242@gmail.com</p>
        </div>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Excited to learn and work with you! Looking forward to what we can create together.&quot;
        </p>
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/nikeshthapa150"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook color="#3B82F6" fontSize={27} />
          </a>

          <a
            href="https://www.instagram.com/nikeshthapa150/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram color="#3B82F6" fontSize={27} />
          </a>

          <a
            href="http://www.linkedin.com/in/nikesh-thapa-b989a1337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin color="#3B82F6" fontSize={27} />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Let's Connect</h1>
        <p>Open to freelance projects and collaborations.</p>
        <p>Response Time: Within 24 hours</p>
        <p>Timezone: GMT+10 (Australia)</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        © 2025 Nikesh Thapa. Built with coffee & code by Kiran Rai. Don’t blame us for bugs!
      </p>
    </div>
  </div>
);

export default Footer;
