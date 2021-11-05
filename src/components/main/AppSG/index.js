/*         *\
 * Imports *
\*         */

// Import : React
import React, { useEffect } from 'react';

// Import : Router
import { Route } from 'react-router-dom';

// Import : Components
import FirstLoader from 'src/components/main/FirstLoader';
import BgVideo from 'src/components/main/BgVideo';
import Music from 'src/containers/Music';
import Home from 'src/components/views/Home';
import Spell from 'src/components/views/Spell';

// Import : Styles
import './styles.scss';

/*
* AppSG component
*/
const AppSG = ({ firstLoad, appIsLoaded }) => {

  /*
  * useEffect
  */
  useEffect(() => {
    {/* At first render, this function will display FirstLoader component */}
    firstLoad();
  }, []);

  return (
    <>
      <div className="appSG">

        {/* ---------- While loading  ---------- */}
        {/* FirstLoader is displayed during the AppSG first rendering */}
        {!appIsLoaded && 
          <FirstLoader 
            message="Great magic takes time, please wait." 
          />}
        
        {/* ---------- After loading  ---------- */}
        {/* 
          After loading, BgVideo, Music & Home components are displayed, 
          main app datas have been loaded by client during this time. 
        */}

        {/* Background video component */}
        <BgVideo />
        {/* Music component */}
        <Music />

        {/* ---------- Router ---------- */}
        {/* Home route "/" (default) */}
        <Route exact path="/" component = {Home} />
         {/* Spell route "/spell" */}
        <Route exact path="/spell" component = {Spell} />

      </div>
    </>
  )
}
 
/* Export component */
export default AppSG;
