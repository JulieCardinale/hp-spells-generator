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
<div className="spell">
  <BGParchment />
  <SpellDetails />
  <SpellButtons />
</div>
);

/* Export component */
export default Spell;
