import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
import DataFetcher from "./DataFetcher/DataFetcher";
import FetchCatFacts from "./FetchCatFacts/FetchCatFacts";
import FetchPhotos from "./FetchPhotos/FetchPhotos";
import Menu from "./Menu/Menu";
import Planets from "./Planets";
import PredictAge from "./PredictAge/PredictAge";
import TextValue from "./TextValue/TextValue";
import Footer from "./footer";
import "./header/Header";
import Header from "./header/Header";
import Main from "./main";
function App() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Main />
        <CounterApp />
        <Planets />
        <TextValue />
        <FetchCatFacts />
        <PredictAge />
        <FetchPhotos />
      </main>
      <Footer />
      <DataFetcher />
    </>
  );
}

export default App;
