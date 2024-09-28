import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import bannerImg from '../../assets/banner-img.webp';
import PlayIcon from '../../assets/play.svg';
import InfoIcon from '../../assets/info.svg';
import bannerTitle from '../../assets/banner-title.webp'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* hero */}
      <div className="hero">
        <img src={bannerImg} alt="banner" className="banner-img"/>
        <div className="hero-caption">
          <img src={bannerTitle} alt="banner-title" className="caption-img"/>
          <h3>Watch the limited series now</h3>
          <p>
            While the plague ravages 1348 Italy, the wealthy and their servants
            gather for a wedding celebration, a bit of fun — and a little
            mayhem.
          </p>
        </div>
        <div className="hero-btns">
          <button className="play">
            <img src={PlayIcon} alt="" />
            Play
          </button>
          <button className="info">
          <img src={InfoIcon} alt=""  />
          More Info
          </button>
          {/* Card */}
        </div>
      </div>
      {/* card */}
      <div className="more-cards">
        

      </div>
      {/* footer */}
    </div>
  );
};

export default Home;
