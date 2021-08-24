import { useState } from 'react';
import { isIOS } from 'react-device-detect';

import officialSite from '../../img/en/mobile/header/official-site.png';
import downloadButton from '../../img/en/mobile/header/download-button.png';
import logo from '../../img/en/mobile/header/logo-header.png';

function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [linkDownload, setLinkDownload] = useState(
    isIOS
      ? 'https://apps.apple.com/us/app/genshin-impact/id1517783697'
      : 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en_US&gl=US'
  );

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo mb" />
      <div className="right mb">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://genshin.mihoyo.com/m/en/home"
        >
          <img src={officialSite} className="button" alt="official-site" />
        </a>
        <a href={linkDownload} target="_blank" rel="noreferrer">
          <img src={downloadButton} className="button" alt="download" />
        </a>
      </div>
    </header>
  );
}

export default Header;
