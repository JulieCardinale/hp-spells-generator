/*         *\
 * Imports *
\*         */

// Import : Connect
import { connect } from 'react-redux';
 
// Import : Component to connect
import SpellButtons from 'src/components/views/Spell/SpellButtons';

// Import : Actions
import { getSpellsDetails } from 'src/actions/spells';
import { startLoading } from 'src/actions/load';

/*
* State : Reading strategy
*/
const mapStateToProps = (state) => ({
  isLoading : state.load.isLoading,
});

/*
* State : Writing strategy
*/
const mapDispatchToProps = (dispatch) => ({
  getSpellsDetails: () => dispatch(getSpellsDetails()),
  startLoading: () => dispatch(startLoading()),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(SpellButtons);
