import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSmurf } from "../store/actions";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
`;

const Input = styled.input`
  background: lightblue;
  margin: 2% 0;
`;

const Button = styled.button`
  width: 25%;
  margin: auto;
  border: none;
  border-radius: 20px;
  padding: 2%;
  background: dodgerblue;
  transition: 0.3s all;
  &:hover {
    cursor: pointer;
    box-shadow: 30px 30px 60px 0px rgba(0, 0, 0, 0.75);
  }
`;

const SmurfForm = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state);
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
        <Input
          name="name"
          type="text"
          value={name}
          onChange={handleChanges}
          placeholder="Enter name"
        ></Input>
        <Input
          name="age"
          type="text"
          value={age}
          onChange={handleChanges}
          placeholder="Enter age"
        ></Input>
        <Input
          name="height"
          type="text"
          value={height}
          onChange={handleChanges}
          placeholder="Enter height"
        ></Input>
        <Button type="submit">Submit</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default SmurfForm;
