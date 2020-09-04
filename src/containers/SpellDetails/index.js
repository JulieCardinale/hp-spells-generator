/*         *\
 * Imports *
\*         */

// Import : Connect
import { connect } from 'react-redux';

// Import : Component to connect
import SpellDetails from 'src/components/views/Spell/SpellDetails';

/*
* State : Reading strategy
*/
const mapStateToProps = (state) => ({
  spellsDetails : state.spells.spellsDetails,
  isLoading : state.load.isLoading,
});

/*
* State : Writing strategy
*/
const mapDispatchToProps = (dispatch) => ({
  
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(SpellDetails);
