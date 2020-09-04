/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Media
import LoaderHP from 'src/assets/img/hp-loader.gif';

// Import : Styles
import './styles.scss';

/*
* Music component
*/
const Loader = () => {
    return (
    <img className="loader"
        src={LoaderHP}
        alt="Music ON"
    />
    )  
};

/* Export component */
export default Loader;
