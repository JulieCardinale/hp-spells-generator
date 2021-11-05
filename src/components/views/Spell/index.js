/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Components
import BGParchment from './BGParchment';
import SpellDetails from 'src/containers/SpellDetails';
import SpellButtons from 'src/containers/SpellButtons';

// Import : Styles
import './styles.scss';

/*
* SpellDetails component
*/
const Spell = () => (
  /* Spell component contain the parchment decoration image, spells details & actions buttons */
  <div className="spell">
    {/* BGParchment component */}
    <BGParchment />
    {/* SpellDetails component */}
    <SpellDetails />
    {/* SpellButtons component */}
    <SpellButtons />
  </div>
);

/* Export component */
export default Spell;
