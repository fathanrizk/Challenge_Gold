import React, { useState, useEffect } from "react";
import NavbarMain from "../components/NavbarMain";
import {
  menuList,
  whyUs,
  FAQ,
  ourService,
  Footer_Logo,
  dataTestimonial,
} from "../helpers/constans";
import Hero from "../components/Hero";
import OurService from "../components/OurService";
import WhyUs from "../components/WhyUs";
import Sewa from "../components/Sewa";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import axios from "axios";
import CarFilter from "../components/CarFilter";
import CarDetail from "../components/CarDetail";
import Testimonial from "../components/Testimonial";

const Home = () => {
  // const [data, setData] = useState([]);
  // const [name, setName] = useState("");

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}`;

  //   axios
  //     .get(api)
  //     .then((res) => {
  //       setData(res.data.cars);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // console.log(data);

  return (
    <>
      <NavbarMain menu={menuList} logo="Binar" />
      {/* <input onChange={handleChange} />
      <button onClick={getData}>cari</button>
      {data.map((item) => (
        <div>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
          <p>{item.price}</p>
        </div>
      ))} */}
      <Hero />
      <OurService banner={ourService} />
      <WhyUs list={whyUs} />
      <Testimonial listTestimonial={dataTestimonial} />
      <Sewa />
      <Faq question={FAQ} />
      <Footer logo={Footer_Logo} />
    </>
  );
};

export default Home;
