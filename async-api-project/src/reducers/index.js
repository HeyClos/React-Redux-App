import {
    FETCH_FF_DATA_START,
    FETCH_FF_DATA_SUCCESS,
    FETCH_FF_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    characters: [],
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FF_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_FF_DATA_SUCCESS:
        return {
          ...state,
          characters: action.payload,
          isLoading: false,
          error: ''
        };
        case FETCH_FF_DATA_FAILURE:
            return {
              ...state,
              characters: null,
              isLoading: false,
              error: 'UH OH!'
            };
      default:
        return state;
    }
  };
  