/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Router
import { Link } from 'react-router-dom';

/*
* StartButton component
*/
const StartButton = ({ getSpellsDetails, startLoading }) => {
  
  /*
  * Handle click on "Start Button"
  * Get a random spell + start Loading
  */
  const handleOnClick = () => {
    getSpellsDetails();
    startLoading();
  }
  
  return (
    <Link to='/spell' exact>
      <button onClick={handleOnClick} className="startButton">
        Start
      </button>
    </Link>
  )
}

// 

/* Export component */
export default StartButton;
