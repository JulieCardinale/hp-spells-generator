/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Loader
import Loader from 'src/components/main/Loader';

// Import : Animation Library
import {Animated} from "react-animated-css";

/*
* FirstLoader component
*/
const FirstLoader = ({ message }) => (
    /* Animation */
    <Animated      
        animationIn="fadeOut" 
        animationInDelay="3000"  
        animationInDuration="2000"  
        isVisible={true}
        style={{ 
            position: 'fixed',
            zIndex: '5',
        }}
    >
        {/* Loader container */}
        <div 
            style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'fixed',
                zIndex: '5',
                backgroundColor: "white",
                height: '100vh', 
                width: '100%',
            }}
        >
            {/* Loader container */}
            <Loader />
            <p 
                style={{ 
                    marginTop :"2rem", 
                    lineHeight: "2rem",
                    color: 'black' 
                }}
            >
                {/* Loading message */}
                {message}
            </p>
        </div>
    </Animated>
)

/* Export component */
export default FirstLoader;
