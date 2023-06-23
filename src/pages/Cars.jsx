import React from "react";
import NavbarMain from "../components/NavbarMain";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { menuList, Footer_Logo } from "../helpers/constans";
import CarFilter from "../components/CarFilter";

const Cars = () => {
  const check_button = "true";
  return (
    <>
      <NavbarMain menu={menuList} />
      <Hero check_button={check_button} />
      <CarFilter />
      <Footer logo={Footer_Logo} />
    </>
  );
};

export default Cars;
