/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FiInstagram, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <h2>Contact with me</h2>
      <div className="footer-container">
        <div className="footer-content">
          <p>Social media</p>
          <ul className="links">
            <li>
              <FaFacebookSquare />
              <a href=""> Facebook</a>
            </li>
            <li>
              <FiInstagram />
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <p>Phone, e-mail</p>
          <ul className="links">
            <li>
              <FaPhoneAlt />
              <a href=""> 123456789</a>
            </li>
            <li>
              <FiMail />
              <a href=""> Lorem@ipsum.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
