/*         *\
 * Imports *
\*         */

// Import : Actions
import {SAVE_SPELLS_DETAILS} from 'src/actions/spells';

/* Initial State */
const initialState = {
  spellsDetails: {
  
  },
};

/*
* Spells reducer
*/
const spells = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SPELLS_DETAILS:
      return {
        ...state,
        spellsDetails: action.spellsDetails,
      };
    default:
      return state;
  }
};

/* Reducer export */
export default spells;
