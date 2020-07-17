import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  CREATE_SMURF_START,
  CREATE_SMURF_SUCCESS,
  CREATE_SMURF_FAILURE,
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isCreating: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return { ...state, isFetching: true, error: "" };
    case FETCH_SMURF_SUCCESS:
      return { ...state, isFetching: false, smurfs: action.payload };
    case FETCH_SMURF_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case CREATE_SMURF_START:
      return { ...state, isCreating: true, error: "" };
    case CREATE_SMURF_SUCCESS:
      return {
        ...state,
        isCreating: false,
        smurfs: action.payload,
      };
    case CREATE_SMURF_FAILURE:
      return { ...state, isCreating: false, error: action.payload };
    default:
      return state;
  }
};
