/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Router
import { Link } from 'react-router-dom';

// Import : Styles
import './styles.scss';

/*
* SpellButtons component
*/
const SpellButtons = ({ getSpellsDetails, startLoading, isLoading }) => {

  /*
  * Handle click on "More Magic Button"
  * Get another spell + start Loading
  */
  const handleOnClick = () => {
    getSpellsDetails();
    startLoading();
  }

  return (
    <div className="spellButtons">

      {/* When spells details are loading the 2 buttons are not displayed */}
      {!isLoading &&
      <>
       {/* Button More magic --> get another spell details */}
        <button onClick={handleOnClick} className="spellButtons__button">
          More magic
        </button>

        {/* Button Close --> go back to home page */}
        <Link to='/' exact>
          <button className="spellButtons__button">
            Close
          </button>
        </Link>
      </>}

    </div> 
  )
}
  
/* Export component */
export default SpellButtons;