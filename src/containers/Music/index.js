/*         *\
 * Imports *
\*         */

// Import : Connect
import { connect } from 'react-redux';

// Import : Component to connect
import Music from 'src/components/main/Music';

// Import : Actions
import { changeMusicPreferences } from 'src/actions/music';

/*
* State : Reading strategy
*/
const mapStateToProps = (state) => ({
  musicIsMute : state.music.musicIsMute,
});

/*
* State : Writing strategy
*/
const mapDispatchToProps = (dispatch) => ({
  changeMusicPreferences: () => dispatch(changeMusicPreferences()),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(Music);
