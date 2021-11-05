/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Media
import Parchment from 'src/assets/img/hp-parchment.png';

// Import : Styles
import './styles.scss';

/*
* BGParchment component
*/
const BGParchment = () => (
  /* This component contain a parchment image displayed behind page informations */
  <img className="bgParchment"
    src={Parchment}
    alt="Parchement background"
  />
);

/* Export component */
export default BGParchment;
