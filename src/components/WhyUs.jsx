import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../css/whyus.css";

const WhyUs = ({ list }) => {
  return (
    <div>
      <Container className="container-whyus">
        {/* <div> */}
        <Row>
          <Col md={12}>
            <h1 className="h-whyus-text">Why Us</h1>
            <p className="p-whyus-text">
              Mengapa harus pilih Binar Car Rental?
            </p>
          </Col>
          {list.map((item) => (
            <Col className="card-sett">
              {/* <div className="card-sett"> */}
              <Card className="card-testimonial">
                <Card.Body>
                  <img src={item.logo} alt="" />
                  <Card.Title className="title-card p-card">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-card p-card">
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* </div> */}
            </Col>
          ))}
        </Row>
        {/* <h1>Why Us</h1>
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
            ))} */}
        {/* <div className="card-sett">
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
            </div> */}

        {/* <div className="card-box">
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
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </Container>
    </div>
  );
};

export default WhyUs;
