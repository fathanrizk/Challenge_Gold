import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/footer.css";
import icon_fb from "../assets/icon_facebook.png";
import icon_mail from "../assets/icon_mail.png";
import icon_twitter from "../assets/icon_twitter.png";
import icon_instagram from "../assets/icon_instagram.png";
import icon_twitch from "../assets/icon_twitch.png";

const Footer = ({ logo }) => {
  return (
    <div>
      <Container className="footer-container">
        <Row className="footer-rows">
          <Col md={3} sm={12} className="footer-side">
            <p className="footer-text">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p className="footer-text">binarcarrental@gmail.com</p>
            <p className="footer-text">081-233-334-808</p>
          </Col>
          <Col md={2} sm={12} className="footer-side">
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </Col>
          <Col md={4} sm={12} className="footer-side">
            <p className="footer-text">Connect With Us</p>
            <div>
              {logo.map((item) => (
                <a href="">
                  <img className="footer-icon" src={item} alt="" />
                </a>
              ))}
            </div>
          </Col>
          <Col md={3} sm={12} className="footer-side">
            <div className="col-md-4 col-sm-12">
              <p className="footer-text">Copyright Binar 2022</p>
              <p className="bg-logo-footer"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
