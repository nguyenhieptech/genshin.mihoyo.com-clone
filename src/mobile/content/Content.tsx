import React from 'react';

import Home from './Home';
import CharacterInfo from './CharacterInfo';
import VersionInfo from './VersionInfo';
import GameFeatures from './GameFeatures';

function Content() {
  return (
    <div className="content">
      <Home />
      <div className="body">
        <CharacterInfo />
        <VersionInfo />
        <GameFeatures />
      </div>
    </div>
  );
}

export default Content;
