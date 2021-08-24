import './styles/main.css';
import background from '../img/en/web/background.jpg';

function Web() {
  return (
    <div className="wrapper">
      <img
        src={background}
        alt="background"
        style={{ width: '1920px', height: '5920px' }}
      />
    </div>
  );
}

export default Web;
