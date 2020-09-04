/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Router
import { Route } from 'react-router-dom';

// Import : Components
import BgVideo from 'src/components/main/BgVideo';
import Music from 'src/containers/Music';
import Home from 'src/components/views/Home';
import Spell from 'src/components/views/Spell';

// Import : Styles
import './styles.scss';

/*
* AppSG component
*/
const AppSG = () => (
  <div className="appSG">
    <BgVideo />
    <Music />
    <Route exact path="/" component = {Home} />
    <Route exact path="/spell" component = {Spell} />
  </div>
);

/* Export component */
export default AppSG;
