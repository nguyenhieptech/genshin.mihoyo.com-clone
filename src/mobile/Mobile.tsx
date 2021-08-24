import { withOrientationChange } from 'react-device-detect';

import Header from './components/Header';
import Footer from './components/Footer';
import Landscape from './components/Landscape';
import Content from './content/Content';
import './styles/main.css';

function Mobile({ isLandscape }: any) {
  if (isLandscape) {
    return <Landscape />;
  }

  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default withOrientationChange(Mobile);
