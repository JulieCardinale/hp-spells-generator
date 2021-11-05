/*         *\
 * Imports *
\*         */

// Import : Connect
import { connect } from 'react-redux';

// Import : Component to connect
import AppSG from 'src/components/main/AppSG';

// Import : Actions
import { firstLoad } from 'src/actions/load';

/*
* State : Reading strategy
*/
const mapStateToProps = (state) => ({
  appIsLoaded : state.load.appIsLoaded,
});

/*
* State : Writing strategy
*/
const mapDispatchToProps = (dispatch) => ({
  firstLoad: () => dispatch(firstLoad()),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(AppSG);
