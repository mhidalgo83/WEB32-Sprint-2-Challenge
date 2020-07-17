import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getSmurfs } from "../store/actions";

const Card = styled.div`
    border: solid black 1px;
    width: 50%;
    margin: 1% auto;
    background: lightblue;

`

const Smurfs = () => {
  const { smurfs } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, []);

  return (
    <div>
      <h1>Here are the Smurfs!!</h1>
        {smurfs.map((smurf) => (
          <Card key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </Card>
        ))}
    </div>
  );
};

export default Smurfs;
