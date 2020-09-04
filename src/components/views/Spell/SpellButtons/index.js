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
  * Get another spell
  */
  const handleOnClick = () => {
    getSpellsDetails();
    startLoading();
  }

  return (
    <div className="spellButtons">
      {!isLoading &&
      <>
        <button onClick={handleOnClick} className="spellButtons__button">
          More magic
        </button>
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