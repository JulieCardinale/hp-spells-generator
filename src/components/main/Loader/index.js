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
* Loader component
*/
const Loader = () => {
    return (
    /* Loader is a gif image */   
    <img className="loader"
        src={LoaderHP}
        alt="Harry Potter loader"
    />
    )  
};

/* Export component */
export default Loader;
