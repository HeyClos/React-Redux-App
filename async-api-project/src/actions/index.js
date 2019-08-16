import axios from 'axios';

//FF stands for Final Fantasy
export const FETCH_FF_DATA_START = 'FETCH_WEBCAM_DATA_START';
export const FETCH_FF_DATA_SUCCESS = 'FETCH_WEBCAM_DATA_SUCCESS';
export const FETCH_FF_DATA_FAILURE = 'FETCH_WEBCAM_DATA_FAILURE';

export const getCharacters = () => {
  return dispatch => {
    dispatch({ type: FETCH_FF_DATA_START });
    axios
      .get('https://www.moogleapi.com/api/v1/characters')
      // url might need work
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_FF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FF_DATA_FAILURE, payload: err.response });
      });
  };
};
