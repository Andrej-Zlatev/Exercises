import bannerImage from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-img" />
      <div className="container">
        <div className="banner-content">
          <p>Summer vacation</p>
          <h1>Nomad nation</h1>
          <button className="banner-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
