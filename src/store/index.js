// Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// Import : local
import rootReducer from 'src/reducers';
import spells from '../middleware/spells';

// Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    spells,
  ),
);

// Store
const store = createStore(
  rootReducer,
  enhancers,
);

// Export
export default store;
