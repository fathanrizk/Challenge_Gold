import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarDetail from "../components/CarDetail";
import { listExclude, listInclude, listRefund } from "../helpers/constans";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { menuList, Footer_Logo } from "../helpers/constans";

const Detail = () => {
  const check = "true";
  const check_button = "true";
  // const [data, setData] = useState([]);
  // const { id } = useParams();

  // const getDetailData = () => {
  //   axios
  //     .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getDetailData();
  // });

  return (
    <>
      <NavbarMain menu={menuList} />
      <Hero check={check} check_button={check_button} />
      <CarDetail
        exclude={listExclude}
        include={listInclude}
        refund={listRefund}
      />
      <Footer logo={Footer_Logo} />
    </>
    // <div>
    //   <h1>{data.name}</h1>
    //   <p>{data.category}</p>
    // </div>
  );
};

export default Detail;
