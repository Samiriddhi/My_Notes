import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState([]);
  //i can fetchdata from any function also but i am using here useeffect hook(function)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <div>
       
        {data.map((item) => {
             //mapping data which is i am storing data from api through array map method
          return (
            <p
            //i am using here inline css styling to just revise the syntax of it
              style={{
                margin: "20px",
                backgroundColor: "pink",
                color: "purple",
              }}>
              {item.address.city}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Axios;
