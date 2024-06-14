import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Form() {
  const nevigate = useNavigate();

  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((val) => setValue(val));
  });

  const [data, setData] = useState({ name: "", age: null });

  const handleForm = (event) => {
    setData(event.target.value);
  };

  const [alert, setAlert] = useState(false);
  const handleSubmision = (event) => {
    event.preventDefault();

    if (data.name == "" && data.age == null) {
      setAlert(true);
    } else {
      nevigate("/thankyou");
    }
  };
  return (
    <>
      {alert ? (
        <p>" all fields are mandotary to fill"</p>
      ) : (
        <>
          <h1>Your Submission Form</h1>

          {/* here is the form */}
          <form>
            <label>Name :</label>
            <input
              type="text"
              placeholder="enter name"
              value={data.name}
              onChange={handleForm}
            />
            <br></br> <br></br>
            <label>Age :</label>
            <input
              type="number"
              placeholdeer="enter agge"
              value={data.age}
              onChange={handleForm}
            />
            <br></br> <br></br>
            <label>Country :</label>
            <select>
              <option>Please choose country name</option>
              {value.map((item, idx) => {
                return <option key={idx}> {item.address.city}</option>;
              })}
            </select>
            <br></br>
            
            <button type="submit" onClick={handleSubmision}>
              Click
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default Form;
