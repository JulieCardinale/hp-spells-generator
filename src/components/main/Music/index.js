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
const Music = ({ changeMusicPreferences, musicIsMute }) => {
  
    /*
    * Handle music preferences
    * Music is mute or audible
    */
    const handleMusicPreferences = () => {
       changeMusicPreferences();
    }

    return (
        <div onClick={handleMusicPreferences} className="music">

            {/* - - - - - ICONES - - - - - */}

            {!musicIsMute && <>
                <img className="music__on"
                    src={MusicON}
                    alt="Music ON"
                />
            </>}
           
            {musicIsMute && <>
                <img className="music__off"
                    src={MusicOFF}
                    alt="Music OFF"
                />
            </>}

            {/* - - - - - MUSIC SELECTION - - - - - */}

            {!musicIsMute && <audio
                autoPlay
                loop
                muted={musicIsMute}
                src={MusicHP}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>}

        </div>
    )  
};

/* Export component */
export default Music;
