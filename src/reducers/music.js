/*         *\
 * Imports *
\*         */

// Import : Actions
import { CHANGE_MUSIC_PREFERENCES } from 'src/actions/music';

/* Initial State */
const initialState = {
  musicIsMute: true,
}

/*
* Music reducer
*/
const music = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MUSIC_PREFERENCES:
      return {
        ...state,
        musicIsMute: !state.musicIsMute,
      };
    default:
      return state;
  }
};

/* Reducer export */
export default music;
