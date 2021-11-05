/*         *\
 * Imports *
\*         */

// Import : Actions
import { FIRST_LOAD, appIsLoaded } from 'src/actions/load';

/*         
* First Load
* --> Load app for 5 seconds
*/    
export default (store) => (next) => (action) => {
  switch (action.type) {
    case FIRST_LOAD: {
        // At first load after 5000ms app is loaded, dispatch action to state 
        setTimeout(() => {
            store.dispatch(appIsLoaded())
        }, 5000)
      break;
    }
    default:
      next(action);
      break;
  }
};
