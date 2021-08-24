import { isMobile } from 'react-device-detect';

import Mobile from './mobile/Mobile';
import Web from './web/Web';

function App() {
  if (isMobile) {
    return <Mobile />;
  }

  return (
    <div className="App">
      <h2>genshin.mihoyo.com clone Web View</h2>
      <Web />
    </div>
  );
}

export default App;
