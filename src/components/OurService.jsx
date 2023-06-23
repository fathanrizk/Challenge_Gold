import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import service from "../assets/img-service.png";
import ceklist from "../assets/ceklist-service.png";
import "../css/ourservice.css";

const OurService = ({ banner }) => {
  return (
    <div className="main-service">
      <Container>
        <Row className="container-service">
          <Col lg={6} md={6} sm={12} className="ourservice">
            <img src={service} />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="p-text-service">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-unstyled">
              {banner.map((item) => (
                <li className="li-span-height">
                  <img src={item.logo} alt="group-svg" />
                  <span className="ms-2 span-text-service">{item.text}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurService;
