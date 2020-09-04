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
const Home = () => (
  <div className="home">
    <Logo />
    <Title />
    <StartButton />
  </div>
);

/* Export component */
export default Home;