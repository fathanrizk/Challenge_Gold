import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import "../css/carfilter.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarFilter = () => {
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const getInitialCategory = () => {
    const value = "";
    return value;
  };

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(getInitialState);
  const [category, setCategory] = useState(getInitialCategory);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&category=${category}&minPrice=${price}&isRented=${status}`;

    axios
      .get(api)
      .then((res) => {
        setData(res.data.cars);
      })
      .catch((err) => console.log(err));
  };

  const redirect = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleName = (name) => {
    setName(name.target.value);
  };
  const handlePrice = (price) => {
    setPrice(price.target.value);
  };
  const handleCategory = (category) => {
    setCategory(category.target.value);
  };
  const handleStatus = (status) => {
    setStatus(status.target.value);
  };

  console.log(data);
  console.log(name);
  console.log(status);
  console.log(price);

  return (
    <div>
      <Container>
        <Row className="container-fill">
          {/* <Col md={12} sm={12} className="padd-search">
            <p>Pencarianmu</p>
          </Col> */}
          <Col md="auto" sm={12} className="container-filter">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  onChange={handleName}
                  type="text"
                  placeholder="Ketik nama/tipe mobil"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md="auto" sm={12} className="container-filter">
            <Form.Group className="mb-3">
              <Form.Label>Kategori</Form.Label>
              <Form.Select
                value={category}
                onChange={handleCategory}
                aria-label="Default select example"
              >
                <option>Masukkan Kapasitas Mobil</option>
                <option value="2 - 4 orang">2 - 4 orang</option>
                <option value="4 - 6 orang">4 - 6 orang</option>
                <option value="6 - 8 orang">6 - 8 orang</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="big">large</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="auto" sm={12} className="container-filter">
            <Form.Group className="mb-3">
              <Form.Label>Harga Minimal</Form.Label>
              <Form.Control
                onChange={handlePrice}
                type="type"
                placeholder="Masukkan harga mobil"
              />
            </Form.Group>
          </Col>
          <Col md="auto" sm={12} className="container-filter">
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={status}
                onChange={handleStatus}
                className="bg-color-dropdown"
              >
                <option></option>
                <option value="true">Disewa</option>
                <option value="false">Tidak disewa</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="auto" className="container-filter">
            <Form.Group className="mb-3 button-car">
              <button onClick={getData} className="bg-button">
                Mulai Sewa Mobil
              </button>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {/* <Col> */}
          {data.map((item) => (
            <>
              <Col className="card-content-filter">
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    className="img-filter-car"
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <p>{item.name}</p>
                    <Card.Title className="h-title-filter">
                      {item.price} / Hari
                    </Card.Title>
                    <Card.Text className="text-title-filter">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      className="btn-choose"
                      onClick={() => redirect(item.id)}
                      variant="success"
                    >
                      Pilih Mobil
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default CarFilter;
