import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import right_button from "../assets/right-button.png";
import left_button from "../assets/left-button.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../css/testimonial.css";

const Test = ({ listTestimonial }) => {
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {/* <div className="mt-5 main-container-testimonial">
        <h2 className="title-h1 text-center">Testimonial</h2>
        <p className="paragraph-title text-center">
          Berbagai review positif dari para pelanggan kami
        </p>
        {listTestimonial.map((item) => (
          <>
            <Slider {...settings}>
              <div className="container-testimonial">
                <div className="testimonial-card">
                  <img src={profile} alt="" />
                </div>
                <div className="testimonial-card-right">
                  <div className="star-set">
                    <img src={star} alt="" />
                  </div>
                  <p className="m-0 paragraph-title">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="m-0 paragraph-title">John 1 32, Bromo</p>
                </div>
              </div> */}

      {/* <div className="d-flex flex-rows gap-5">
                <div className="d-flex align-items-center">
                  <img src={profile} alt="people" />
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex">
                    <img src={star} alt="pict-group" />
                    <img src={star} alt="pict-group" />
                  </div>
                  <p className="m-0 paragraph-title">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="m-0 paragraph-title">John 1 32, Bromo</p>
                </div>
              </div> */}
      {/* </Slider> */}
      {/* </> */}
      {/* ))} */}
      {/* <Slider {...settings}>
          <div className="d-flex flex-rows gap-5">
            <div className="d-flex align-items-center">
              <img src={profile} alt="people" />
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex">
                <img src={star} alt="pict-group" />
                <img src={star} alt="pict-group" />
              </div>
              <p className="m-0 paragraph-title">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="m-0 paragraph-title">John 1 32, Bromo</p>
            </div>
          </div>
          <div className="justify-content-center overflow-hidden d-none d-xl-flex">
            <div className="list-card-testimonial p-5">
              <div className="d-flex flex-rows gap-5">
                <div className="d-flex align-items-center">
                  <img src={profile} alt="people" />
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex">
                    <img src={star} alt="pict-group" />
                    <img src={star} alt="pict-group" />
                  </div>
                  <p className="m-0 paragraph-title">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="m-0 paragraph-title">John 2 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-center overflow-hidden d-none d-xl-flex">
            <div className="list-card-testimonial p-5">
              <div className="d-flex flex-rows gap-5">
                <div className="d-flex align-items-center">
                  <img src={profile} alt="people" />
                </div>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <img src={star} alt="pict-group" />
                    <img src={star} alt="pict-group" />
                  </div>
                  <p className="m-0 paragraph-title">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="m-0 paragraph-title">John 3 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-center overflow-hidden d-none d-xl-flex">
            <div className="list-card-testimonial p-5">
              <div className="d-flex flex-rows gap-5">
                <div className="d-flex align-items-center">
                  <img src={profile} alt="people" />
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex">
                    <img src={star} alt="pict-group" />
                    <img src={star} alt="pict-group" />
                  </div>
                  <p className="m-0 paragraph-title">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="m-0 paragraph-title">John 4 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </Slider> */}
      {/* </div> */}
    </div>
  );
};

export default Test;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import "../css/whyus.css";

// const WhyUs = ({ list }) => {
//   return (
//     <div>
//       <Container className="container-whyus">
{
  /* <div> */
}
{
  /* <Row>
          <Col md={12}>
            <h1 className="h-whyus-text">Why Us</h1>
            <p className="p-whyus-text">
              Mengapa harus pilih Binar Car Rental?
            </p>
          </Col>
          {list.map((item) => (
            <Col className="card-sett"> */
}
{
  /* <div className="card-sett"> */
}
{
  /* <Card className="card-testimonial">
                <Card.Body>
                  <img src={item.logo} alt="" />
                  <Card.Title className="title-card p-card">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-card p-card">
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card> */
}
{
  /* </div> */
}
{
  /* </Col>
          ))}
        </Row> */
}
{
  /* <h1>Why Us</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="card-container">
            {list.map((item) => (
              <div className="card-sett">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={item.logo} alt="" />
                    <Card.Title className="title-card">{item.title}</Card.Title>
                    <Card.Text className="text-card">{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))} */
}
{
  /* <div className="card-sett">
              <Card style={{ width: "18rem" }} gap-3>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card-sett">
              <Card style={{ width: "18rem" }} gap-3>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="card-sett">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div> */
}

{
  /* <div className="card-box">
              <img src="" alt="group-svg" />
              <span className="paragraph-title">Mobil Lengkap</span>
              <p className="paragraph-title">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
            <div className="card-box">
              <img src="" alt="group-svg" />
              <span className="paragraph-title">Mobil Lengkap</span>
              <p className="paragraph-title">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* </Container>
    </div>
  );
};

export default WhyUs; */
}
