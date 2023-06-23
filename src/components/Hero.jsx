import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import mercy from "../assets/img_banner.png";
import "../css/hero.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Banner = ({ check, check_button }) => {
  // const check = hidden;
  const btn_check = check_button;
  const show = check;
  console.log(show);
  return (
    <div className="banner-bg">
      <Container>
        <Row className="container-banner">
          <Col lg={6} md={6} sm={12}>
            <h1 className="text-h1">
              Sewa & Rental Mobil Terbaik di kawasan Lampung
            </h1>
            <p className="text-p">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {btn_check == "true" ? (
              <a hidden href="/cars">
                <button className="bg-button">Mulai Sewa Mobil</button>
              </a>
            ) : (
              <a href="/cars">
                <button className="bg-button">Mulai Sewa Mobil</button>
              </a>
            )}
            {/* <a href="/cars">
              <button className="bg-button">Mulai Sewa Mobil</button>
            </a> */}
          </Col>
          <Col lg={6} md={6} sm={12} className="container-right1">
            {show == "true" ? (
              <img hidden src={mercy} alt="" />
            ) : (
              <img src={mercy} alt="" />
            )}
            {/* <img {} src={mercy} alt="" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
