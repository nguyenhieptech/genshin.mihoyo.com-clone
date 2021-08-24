import React from 'react';

import landscape from '../../img/en/mobile/landscape.png';

function Landscape() {
  return (
    <div className="landscape">
      <div className="box">
        <img src={landscape} alt="" className="image" />
        <p>Please rotate your device for better display.</p>
      </div>
    </div>
  );
}

export default Landscape;
