/*         *\
 * Imports *
\*         */

// Import : Actions
import {START_LOADING, STOP_LOADING} from 'src/actions/load';

/* Initial State */
const initialState = {
  isLoading: false,
};

/*
* Load reducer
*/
const load = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

/* Reducer export */
export default load;
