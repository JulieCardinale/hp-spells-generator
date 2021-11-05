/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Medias
import MusicON from 'src/assets/icon/music.svg';
import MusicOFF from 'src/assets/icon/music-mute.svg';
import MusicHP from 'src/assets/music/music-HP.mp3';

// Import : Styles
import './styles.scss';

/*
* Music component
*/
const Music = ({ changeMusicPreferences, musicIsMute }) => (

    /* Handle music preferences on click (audible or mute) */
    <div onClick={() => (changeMusicPreferences())} className="music">

        {/* - - - - - ICONES - - - - - */}
        {/* If music is mute display normal speaker */}
        {!musicIsMute && <>
            <img className="music__on"
                src={MusicON}
                alt="Music ON"
            />
        </>}
        {/* If music is mute display mute speaker */}
        {musicIsMute && <>
            <img className="music__off"
                src={MusicOFF}
                alt="Music OFF"
            />
        </>}

        {/* - - - - - MUSIC SELECTION - - - - - */}
        {/* Audio element configuration */}
        {!musicIsMute && 
        <audio
            autoPlay
            loop
            muted={musicIsMute}
            src={MusicHP}>
            {/* If client can't display audio element */}
            Your browser does not support the
            <code>audio</code> element.
        </audio>}

    </div>
    
);  


/* Export component */
export default Music;
