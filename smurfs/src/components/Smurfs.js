import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSmurfs } from "../store/actions";

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
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
    </div>
  );
};

export default Smurfs;
