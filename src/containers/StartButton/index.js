/*         *\
 * Imports *
\*         */

// Import : Connect
import { connect } from 'react-redux';

// Import : Component to connect
import StartButton from 'src/components/views/Home/StartButton';

/* Actions imports */
import { getSpellsDetails } from 'src/actions/spells';
import { startLoading } from 'src/actions/load';

/*
* State : Reading strategy
*/
const mapStateToProps = (state) => ({
});

/*
* State : Writing strategy
*/
const mapDispatchToProps = (dispatch) => ({
  getSpellsDetails: () => dispatch(getSpellsDetails()),
  startLoading: () => dispatch(startLoading()),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
