import Banner from "./components/Banner/Banner";
import DetailsBlock from "./components/DetailsBlock/DetailsBlock";
import Footer from "./components/Footer/Footer";
import PlacesContainer from "./components/PlacesContainer/PlacesContainer";
import "./css/main.scss";
import image1 from "./images/db1.jpg";
import image2 from "./images/db2.jpg";
const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <DetailsBlock
        title="Stories of Adventures"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos molestias, necessitatibus reprehenderit dolor nulla quam? Est ad quo voluptate laborum?"
        imageSrc={image2}
        category="ABOUT"
      />
      <PlacesContainer />
      <DetailsBlock
        title="Popular Adventures"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos molestias, necessitatibus reprehenderit dolor nulla quam? Est ad quo voluptate laborum?"
        imageSrc={image1}
        category="ABOUT"
      />
      <Footer />
    </div>
  );
};

export default App;
