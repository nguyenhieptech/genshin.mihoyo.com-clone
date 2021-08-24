import textBanner from '../../img/en/mobile/home-banner/text-banner.png';
import playButton from '../../img/en/mobile/home-banner/play-button.png';

function Home() {
  const handleClick = () => {
    alert('hihi');
  };

  return (
    <div className="home">
      <img src={textBanner} alt="" className="text-banner" />
      <img
        src={playButton}
        alt=""
        className="play-button"
        onClick={handleClick}
      />
    </div>
  );
}

export default Home;
