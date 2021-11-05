/*         *\
 * Imports *
\*         */

// Import : Actions
import {APP_IS_LOADED, START_LOADING, STOP_LOADING} from 'src/actions/load';

/* Initial State */
const initialState = {
  isLoading: false,
  appIsLoaded: false,
};

/*
* Load reducer
*/
const load = (state = initialState, action = {}) => {
  switch (action.type) {
  case APP_IS_LOADED:
    return {
      ...state,
      appIsLoaded: action.appIsLoadedValue,
    };
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
