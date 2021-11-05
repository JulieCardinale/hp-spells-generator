/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Components
import Logo from './Logo';
import Title from './Title';
import StartButton from 'src/containers/StartButton';

// Import : Styles
import './styles.scss';

/*
* Home component
*/
const Home = () => {
  return (
    /* Home Page contain logo, title & start button */
    <div className="home" >
      {/* Logo component */}
      <Logo />
      {/* Title component */}
      <Title />
      {/* Start Button component */}
      <StartButton />
    </div>
  )
}

/* Export component */
export default Home;