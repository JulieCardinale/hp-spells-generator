/*         *\
 * Imports *
\*         */

// Import : React
import React from 'react';

// Import : Medias
import StarsVideo from 'src/assets/video/hp-bg-stars.mp4';

/*
* BgVideo component
*/
const BgVideo = () => (
  /* Configure video element */
  <video
      autoPlay
      loop
      muted
      style={{
        position: 'fixed',
        width: '100%',
        height: '100vh',
        left: '0',
        top: '0',
        objectFit: 'cover',
        zIndex: '-1',
        opacity:'50%',
      }}
    >
    <source
      src={StarsVideo}
      type="video/mp4"
    />
    {/* If client can't display video element */}
    Your browser does not support the
      <code>video</code> element.
  </video>
);

/* Export component */
export default BgVideo;
