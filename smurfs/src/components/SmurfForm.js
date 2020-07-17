import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSmurf } from "../store/actions";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });
  const { name, age, height } = smurf;

  const handleChanges = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSmurf(smurf));
    setSmurf({ id: Date.now(), name: "", age: "", height: "" });
  };
  return (
    <div>
      <h1>Create a smurf</h1>
      <Form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChanges}
          placeholder="Enter name"
        ></input>
        <input
          name="age"
          type="text"
          value={age}
          onChange={handleChanges}
          placeholder="Enter age"
        ></input>
        <input
          name="height"
          type="text"
          value={height}
          onChange={handleChanges}
          placeholder="Enter height"
        ></input>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default SmurfForm;
