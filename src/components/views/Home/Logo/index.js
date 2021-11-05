/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Media
import HPLogo from 'src/assets/img/hp-logo.png';

// Import : Styles
import './styles.scss';

/*
* Logo component
*/
const Logo = () => (
  /* Logo Harry Potter in PNG */
  <img className="logo"
    src={HPLogo}
    alt="Logo Harry Potter"
  />
);

/* Export component */
export default Logo;