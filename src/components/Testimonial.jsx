import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import right_button from "../assets/right-button.png";
import left_button from "../assets/left-button.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../css/testimonial.css";

const Testimonial = ({ listTestimonial }) => {
  const slider = React.useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container-testian">
      <Container fluid>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <h2 className="h-text-testimonial text-center">Testimonial</h2>
            <p className="p-text-testimonial text-center">
              Berbagai review positif dari para pelanggan kami
            </p>
          </Col>
          <Slider ref={slider} {...settings}>
            {listTestimonial.map((item) => (
              <>
                <Col className="container-testimonial">
                  <div className="testimonial-card">
                    <img src={item.picture} alt="" />
                  </div>
                  <div>
                    <div className="star-set">
                      <img src={item.logo} alt="" />
                      <img src={item.logo} alt="" />
                      <img src={item.logo} alt="" />
                      <img src={item.logo} alt="" />
                    </div>
                    <p className="p-text-testimonial">{item.comment}</p>
                    <p className="p-name-tastimonial">{item.profile}</p>
                  </div>
                </Col>
              </>
            ))}
          </Slider>
          <Col className="arrow">
            <Button
              variant="light"
              style={{ background: "white" }}
              onClick={() => slider?.current?.slickPrev()}
            >
              <img src={left_button} alt="" />
            </Button>
            <Button
              onClick={() => slider?.current?.slickNext()}
              variant="light"
              style={{ background: "white" }}
            >
              <img src={right_button} alt="" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
