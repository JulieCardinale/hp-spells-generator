/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Utilities functions
import { capitalizeFirstLetter } from 'src/selectors'

// Import : Components
import Loader from 'src/components/main/Loader';

// Import : Styles
import './styles.scss';

/*
* SpellDetails component
*/
const SpellDetails = ({ spellsDetails, isLoading }) => {
  return (
    <div className="spellDetails">

      {/* When spells details are loading loader is displayed */}
      {isLoading && <Loader />}
      
      {/* When spells details are loading title & description are not displayed */}
      {!isLoading && 
      <>

        {/* Spell title */}
        <h1 className="spellDetails__title">
          {spellsDetails && spellsDetails.name && spellsDetails.name}
        </h1>

        {/* Spell description */}
        <p className="spellDetails__description">
          <span>“ </span>
            {spellsDetails && spellsDetails.effect && capitalizeFirstLetter(spellsDetails.effect)}
          <span> ”</span>
        </p>

      </>}
    </div>
  )
}
 
/* Export component */
export default SpellDetails;
