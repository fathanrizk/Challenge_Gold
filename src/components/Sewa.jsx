import React from "react";
import { Container } from "react-bootstrap";
import "../css/sewa.css";

const Sewa = () => {
  return (
    <div>
      <Container className="container-sewa">
        <h1>Sewa Mobil di Lampung Sekarang</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="btn-sewa">
          <a href="">
            <button className="bg-button">Mulai Sewa Mobil</button>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Sewa;
