import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import fi_user from "../assets/fi_users.png";
import "../css/cardetail.css";

const CarDetail = ({ include, exclude, refund }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  });

  // const redirect = (id) => {
  //   navigate(`/detail/${id}`);
  // };

  console.log(data);

  return (
    <div>
      <Container>
        <Row>
          <Col className="container-cardetail">
            <h1>Tentang Paket</h1>
            <h3 className="h-accordion-text">Include</h3>
            {include.map((item) => (
              <ul>
                <li className="li-text-cardetail">{item}</li>
              </ul>
            ))}
            <h3>Exclude</h3>
            {exclude.map((item) => (
              <ul>
                <li className="li-text-cardetail">{item}</li>
              </ul>
            ))}
            <Accordion
              className="accordion-detail"
              defaultActiveKey={["0"]}
              alwaysOpen
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3>Refund, Reschedule, Overtime</h3>
                </Accordion.Header>
                <Accordion.Body className="body-accordion">
                  {refund.map((item) => (
                    <ul>
                      <li className="li-text-cardetail">{item}</li>
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="container-right-cardetail">
            <div className="img-cardetail-container">
              <img className="cardetail-image" src={data.image} alt="" />
            </div>
            <div className="text-container-detailcar">
              <h4>{data.name}</h4>
              <p className="span-category">
                <img className="p-1" src={fi_user} alt="" />
                {data.category}
              </p>
            </div>
            <div className="span-detail-container">
              <h4>Total</h4>
              <h4>Rp {data.price}</h4>
            </div>
          </Col>
        </Row>
      </Container>
      {/* {data.map((item) => (
        <>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <button onClick={() => redirect(item.id)}>Cari</button>
        </>
      ))} */}
    </div>
  );
};

export default CarDetail;
