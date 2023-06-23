import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../css/faq.css";

const Faq = ({ question }) => {
  return (
    <div>
      <Container className="cont-faq">
        <Row>
          <Col md={6} sm={12} className="cont-col-faq">
            <h3>Frequently Asked Question</h3>
            <p className="p-text-faq">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
          <Col md={6} sm={12}>
            {question.map((item, key) => (
              <Accordion className="accordion-cont" defaultActiveKey="0">
                <Accordion.Item eventKey={key}>
                  <Accordion.Header>
                    <span className="p-text-faq">{item.question}</span>
                  </Accordion.Header>
                  <Accordion.Body className="p-text-faq">
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;

// import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import { Container } from "react-bootstrap";

// const Faq = ({ question }) => {
//    return (
//       <Container>
//          {question.map((item, key) => (
//             <Accordion defaultActiveKey="0">
//                <Accordion.Item eventKey={key}>
//                   <Accordion.Header>{item.question}</Accordion.Header>
//                   <Accordion.Body>{item.anser}</Accordion.Body>
//                </Accordion.Item>
//             </Accordion>
//          ))}
//       </Container>
//    );
// };

// export default Faq;
