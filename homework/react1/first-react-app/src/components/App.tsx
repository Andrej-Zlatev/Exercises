import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
import DataFetcher from "./DataFetcher/DataFetcher";
import Menu from "./Menu/Menu";
import Planets from "./Planets";
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
      </main>
      <Footer />
      <DataFetcher />
    </>
  );
}

export default App;
