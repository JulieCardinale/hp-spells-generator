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
      { isLoading && <Loader />}
      {!isLoading && 
      <>
        <h1 className="spellDetails__title">
          {spellsDetails && spellsDetails.spell && spellsDetails.spell}
        </h1>
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