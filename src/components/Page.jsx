import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Page() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => {
        setData(res.data.cars);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const redirect = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div>
      {data.length
        ? data.map((item) => (
            <>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
              <button onClick={() => redirect(item.id)}></button>
            </>
          ))
        : null}
    </div>
  );
}

export default Page;
