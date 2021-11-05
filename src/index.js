/* 
* Imports
*/

// React
import React from 'react';

// React-dom
import { render } from 'react-dom';

// React-redux
import { Provider } from 'react-redux';
import store from 'src/store';

// React-router
import { BrowserRouter as Router } from 'react-router-dom';

// Component to render
import AppSG from 'src/containers/AppSG';

/* 
* Render 
*/
const rootReactElement = (
    <Provider store={store}>
      <Router>
        <AppSG />
      </Router>
    </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
