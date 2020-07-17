import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const CREATE_SMURF_START = "CREATE_SMURF_START";
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS";
export const CREATE_SMURF_FAILURE = "CREATE_SMURF_FAILURE";

//GET request for smurfs
export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("Get smurfs ", res);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message });
    });
};

//POST request for smurfs
export const createSmurf = (smurf) => (dispatch) => {
  dispatch({ type: CREATE_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      dispatch({ type: CREATE_SMURF_SUCCESS, payload: res.data });
      
    })
    .catch((err) => {
      dispatch({ type: CREATE_SMURF_FAILURE, payload: err.message });
    });
};
